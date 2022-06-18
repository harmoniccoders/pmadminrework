import {
	Flex,
	VStack,
	Select,
	SimpleGrid,
	GridItem,
	Button,
	HStack,
	FormLabel,
} from "@chakra-ui/react";
import { PrimaryInput } from "lib/components/Utilities/PrimaryInput";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginModel } from "types/AppTypes";

function Setup() {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>();

	return (
		<Flex mt="2rem" pr="1rem">
			<VStack spacing="1rem" alignItems="flex-start" w="40%">
				<SimpleGrid columns={2}>
					<GridItem colSpan={2}>
						<PrimaryInput<LoginModel>
							register={register}
							name="password"
							error={errors.password}
							defaultValue=""
							type="text"
							label="Plan name"
							placeholder="Liquede Seal"
						/>
					</GridItem>
					<GridItem colSpan={2}>
						<FormLabel color="brand.100" fontSize="1.1rem" mt="1rem">
							Interest & Minimum
						</FormLabel>
						<HStack align="flex-end">
							<PrimaryInput<LoginModel>
								register={register}
								name="password"
								error={errors.password}
								defaultValue=""
								type="text"
								placeholder="5%"
							/>
							<Select
								placeholder="1 Month"
								w="full"
								borderBottom="2px solid black"
								border="0"
								borderRadius="0"
								bgColor="rgba(25,25,25,.03)"
								color="rgba(37,36,39,1)"
								fontSize="16px"
								fontWeight="600"
							>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</HStack>
					</GridItem>
					<GridItem colSpan={2}>
						<Button w="full" mt="3rem" height="3rem">
							Update
						</Button>
					</GridItem>
				</SimpleGrid>
			</VStack>
		</Flex>
	);
}

export default Setup;
