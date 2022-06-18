import {
	Box,
	Button,
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
import { useForm } from "react-hook-form";
import { PrimaryInput } from "../Utilities/PrimaryInput";
import { LoginModel } from "types/AppTypes";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

function LimitModal({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
	const [successOpen, setsuccessOpen] = useState(false);
	const openModal = () => {
		setsuccessOpen(true);
	};
	const closeModal = () => {
		setsuccessOpen(false);
	};
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>();

	return (
		<>
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
							Limit SLIPCARD
						</Text>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box maxH="80vh" overflowY="auto" px={5}>
							<Box mt="0rem">
								<Select
									placeholder="Set per transaction"
									w="full"
									borderBottom="2px solid black"
									border="0"
									borderRadius="0"
									color="rgba(37,36,39,1)"
									fontSize="16px"
									my="1rem"
									textTransform="capitalize"
									fontWeight="600"
								>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box w="full">
								<Text
									fontSize="14px"
									fontWeight="500"
									color="rgba(37,36,39,.5)"
									textAlign="center"
								>
									Current Limit
								</Text>
								<Text
									fontSize="35px"
									fontWeight="700"
									color="rgba(25,25,25,1)"
									textAlign="center"
								>
									₦500,000
								</Text>
							</Box>
							<PrimaryInput<LoginModel>
								register={register}
								name="email"
								error={errors.email}
								defaultValue=""
								type="email"
								placeholder="Type new limit"
							/>
							<Button
								w="full"
								mt="1rem"
								height="3rem"
								onClick={() => openModal()}
							>
								Set Limit
							</Button>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
			<SuccessModal
				message="You have successfully updated the transaction limit on your SLIPCARD"
				isOpen={successOpen}
				onClose={closeModal}
			/>
		</>
	);
}
export default LimitModal;
