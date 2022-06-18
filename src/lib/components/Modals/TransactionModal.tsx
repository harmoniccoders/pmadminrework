import {
	Box,
	Button,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	Text,
	VStack,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import TransactionItem from "../Utilities/TransactionItem";

function TransactionModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: any;
}) {
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
				borderRadius="0"
				w={["88%", "50%"]}
				overflow="hidden"
				maxH="100vh"
				mt="0"
				mb="0"
			>
				<ModalHeader>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						SLIPCARD Transactions
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box maxH="80vh" overflowY="auto" px={5}>
						<InputGroup>
							<InputLeftElement
								h="42px"
								w="42px"
								children={<BsSearch color="rgba(0, 0, 0, 01)" />}
							/>
							<Input
								placeholder="Search"
								height="2.5rem"
								bgColor="white"
								border="2px solid black"
								borderRadius="4px"
								boxShadow="0"
								fontSize="14px"
								fontWeight="medium"
								padding="0 3rem"
								color="black !important"
								_focus={{
									borderColor: "unset",
									border: "0",
								}}
							/>
						</InputGroup>
						<HStack justify="space-between" my="2rem">
							<Box>
								<Text fontSize="14px" color="rgba(37,36,39,1)">
									From
								</Text>
								<Select
									placeholder="01 Jan 2020"
									borderBottom="2px solid black"
									w="130px"
									border="0"
									borderRadius="0"
									color="rgba(37,36,39,1)"
									fontSize="16px"
									fontWeight="400"
								>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box>
								<Text fontSize="14px" color="rgba(37,36,39,1)">
									To
								</Text>
								<Select
									placeholder="01 Jan 2020"
									borderBottom="2px solid black"
									border="0"
									borderRadius="0"
									w="130px"
									color="rgba(37,36,39,1)"
									fontSize="16px"
									fontWeight="400"
								>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
						</HStack>
						<Box mt="1rem">
							<Text fontWeight="600" my="1rem">
								Today
							</Text>
							<VStack spacing={3} align="flex-start">
								<TransactionItem
									title="Google GSuite"
									value="Debit - 12 Nov 20"
									amount="- ₦4,800"
									date="12/11/20"
									time={"4:42 PM (West African Central Time)"}
									recepient={"Google Nigeria"}
									tranStatus={"Completed"}
									refrenceId={"0934738902835783902"}
								/>
								<TransactionItem
									title="Ikeja Electricity DI LA NG"
									value="Debit - 12 Nov 20"
									amount="- ₦20,000"
									date="12/11/20"
									time={"4:42 PM (West African Central Time)"}
									recepient={"Google Nigeria"}
									tranStatus={"Completed"}
									refrenceId={"0934738902835783902"}
								/>
								<TransactionItem
									title="Netflix Nigeria - PREA NG"
									value="Debit - 12 Nov 20"
									amount="- ₦3,600"
									date="12/11/20"
									time={"4:42 PM (West African Central Time)"}
									recepient={"Google Nigeria"}
									tranStatus={"Completed"}
									refrenceId={"0934738902835783902"}
								/>
							</VStack>
						</Box>
						<Box mt="2rem">
							<Select
								placeholder="This Week"
								w="130px"
								border="0"
								borderRadius="0"
								color="rgba(37,36,39,1)"
								fontSize="16px"
								my="1rem"
								fontWeight="600"
							>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
							<VStack spacing={3} align="flex-start">
								<TransactionItem
									title="Google GSuite"
									value="Debit - 12 Nov 20"
									amount="- ₦4,800"
									date="12/11/20"
									time={"4:42 PM (West African Central Time)"}
									recepient={"Google Nigeria"}
									tranStatus={"Completed"}
									refrenceId={"0934738902835783902"}
								/>
							</VStack>
						</Box>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default TransactionModal;
