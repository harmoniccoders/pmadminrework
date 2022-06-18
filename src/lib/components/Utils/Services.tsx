import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	HStack,
	Icon,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	SimpleGrid,
	Square,
	Switch,
	Text,
	VStack,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import ValueBox from "../Utilities/ValueBox";
import { useForm } from "react-hook-form";
import { LoginModel } from "types/AppTypes";
import { PrimaryInput } from "../Utilities/PrimaryInput";

function Services() {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>();

	return (
		<HStack spacing="1rem" h="auto" alignItems="flex-start">
			<Box w="20%" bgColor="white" minH="90vh" h="100%">
				<InputGroup>
					<InputLeftElement
						h="42px"
						w="42px"
						children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
					/>
					<Input
						placeholder="Search"
						height="2.5rem"
						bgColor="white"
						border="1px solid black"
						borderRadius="3px"
						boxShadow="0"
						fontSize="14px"
						fontWeight="medium"
						padding="0 3rem"
						_focus={{
							borderColor: "unset",
							border: "0",
						}}
					/>
				</InputGroup>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					justify="space-between"
					transition="all .2s ease"
					px="1rem"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						_groupHover={{ color: "white" }}
					>
						Pade Omotosho
					</Text>
					<Icon as={BiCheck} color="rgba(0,255,0,1)" />
				</Flex>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					justify="space-between"
					transition="all .2s ease"
					px="1rem"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						_groupHover={{ color: "white" }}
					>
						Pade Omotosho
					</Text>
					<Icon as={BiCheck} color="rgba(0,255,0,1)" />
				</Flex>
			</Box>
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
				<Flex fontWeight="bold" flexDirection="column">
					<Square
						bgColor="black"
						color="white"
						size="4rem"
						overflow="hidden"
						borderRadius="5px"
						mb="1rem"
					>
						<Image src="" w="full" h="auto" objectFit="cover" />
					</Square>
					<Box>
						<Text fontSize="1.5rem">DSTV Subscription</Text>
					</Box>
				</Flex>
				<Flex justifyContent="space-between" my="1rem" align="center">
					<Text fontSize=".9rem" fontWeight="600">
						Analytics for DSTV
					</Text>
					<HStack
						justifyContent="flex-end"
						align="center"
						spacing={6}
						cursor="pointer"
					>
						<Flex
							w="180px"
							h="36px"
							bgColor="rgba(0,0,0,.03)"
							justify="space-between"
							alignItems="center"
							px="1.1rem"
						>
							<Text color="black" fontSize="14px" fontWeight="600">
								Generate Report
							</Text>
							<i
								className="far fa-file-export"
								style={{ color: "rgba(0, 0, 0, 0.3)" }}
							></i>
						</Flex>

						<Select
							placeholder="Weekly"
							borderRadius="3px"
							w="95px"
							color="rgba(0, 0, 0, 0.4)"
							border="1px solid rgba(0,0,0,0.8)"
							fontSize="12px"
							bgColor="white"
							fontWeight="500"
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</HStack>
				</Flex>
				<HStack spacing={4}>
					<Box w="40%">
						<SimpleGrid columns={2}>
							<GridItem colSpan={2}>
								<Box
									bgColor="white"
									fontWeight="semibold"
									borderRadius="6px"
									boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
									h="13rem"
									padding="1rem"
								>
									<Flex justifyContent="space-between" mb=".5rem">
										<Text fontSize="12px">Revenue</Text>
									</Flex>
									<Box width="full" h="8rem"></Box>
								</Box>
							</GridItem>
						</SimpleGrid>
					</Box>
					<Box w="60%">
						<SimpleGrid columns={2} gap={4}>
							<GridItem colSpan={1}>
								<VStack
									bgColor="white"
									fontWeight="semibold"
									borderRadius="6px"
									boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
									h="13rem"
									padding="1rem"
									align="flex-start"
									spacing={3}
								>
									<Flex justifyContent="space-between">
										<Text fontSize="12px">Transaction Value</Text>
									</Flex>
									<Text fontSize="20px" fontWeight="bold">
										₦107,090,600.00
									</Text>
									<Grid templateColumns="repeat(3,1fr)" gap="2" w="full">
										<ValueBox title="Completed" value="6M" />
										<ValueBox title="Pending" value="8M" />
										<ValueBox title="Failed" value="94M" />
									</Grid>
								</VStack>
							</GridItem>
							<GridItem colSpan={1}>
								<VStack
									bgColor="white"
									fontWeight="semibold"
									borderRadius="6px"
									boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
									h="13rem"
									padding="1rem"
									align="flex-start"
									spacing={3}
								>
									<Flex justifyContent="space-between">
										<Text fontSize="12px">Transaction Volume</Text>
									</Flex>
									<Text fontSize="20px" fontWeight="bold">
										21,349
									</Text>
									<Grid templateColumns="repeat(3,1fr)" gap="2" w="full">
										<ValueBox title="Completed" value="531" />
										<ValueBox title="Pending" value="13" />
										<ValueBox title="Failed" value="7" />
									</Grid>
								</VStack>
							</GridItem>
						</SimpleGrid>
					</Box>
				</HStack>
				<Box w="40%">
					<VStack spacing="1rem" alignItems="flex-start" w="full" mt="2rem">
						<SimpleGrid columns={2}>
							<GridItem colSpan={2}>
								<Text fontSize=".9rem" fontWeight="600">
									Service Name
								</Text>
							</GridItem>
							<GridItem colSpan={2}>
								<PrimaryInput<LoginModel>
									register={register}
									name="password"
									error={errors.password}
									defaultValue=""
									type="text"
									placeholder="Liquede Seal"
								/>
							</GridItem>
							<GridItem colSpan={2}>
								<Flex my="1rem">
									<Text
										fontSize="12px"
										fontWeight="medium"
										color="rgba(15,15,15,.5)"
										mr="0.5rem"
									>
										Enable Service
									</Text>
									<Switch colorScheme="brand" size="sm" defaultChecked />
								</Flex>
							</GridItem>
							<GridItem colSpan={2}>
								<Button w="full" height="3rem">
									Update
								</Button>
							</GridItem>
						</SimpleGrid>
					</VStack>
				</Box>
			</Box>
		</HStack>
	);
}

export default Services;
