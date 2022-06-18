import {
	Button,
	FormLabel,
	GridItem,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginModel } from "types/AppTypes";
import { PrimaryInput } from "../Utilities/PrimaryInput";

function CreateNewPlan({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>();
	return (
		<Modal
			motionPreset="slideInBottom"
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(90deg)"
			/>
			<ModalContent
				py={5}
				borderRadius="10px"
				w={["88%", "50%"]}
				overflow="hidden"
				maxH="100vh"
				mt="0"
				mb="0"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
			>
				<ModalHeader>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						Create New Plan
					</Text>
				</ModalHeader>
				{/* <ModalCloseButton /> */}
				<ModalBody>
					<form>
						<VStack maxH="80vh" overflowY="auto" px={5}>
							<VStack spacing="1rem" alignItems="flex-start" w="full">
								<form>
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
											<Button w="full" mt="3rem" height="3rem" type="submit">
												Create Plan
											</Button>
										</GridItem>
									</SimpleGrid>
								</form>
							</VStack>
						</VStack>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default CreateNewPlan;
