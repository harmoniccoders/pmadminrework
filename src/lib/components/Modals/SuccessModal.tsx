import {
	Box,
	Button,
	Circle,
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
import { FiCheck } from "react-icons/fi";

function SuccessModal({
	isOpen,
	onClose,
	message,
}: {
	isOpen: boolean;
	onClose: any;
	message: string;
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
				borderRadius="10px"
				w={["88%", "50%"]}
				overflow="hidden"
				maxH="100vh"
				mt="0"
				mb="0"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
			>
				<ModalHeader />
				{/* <ModalCloseButton /> */}
				<ModalBody>
					<VStack maxH="80vh" overflowY="auto" px={5}>
						<Box mt="0rem">
							<Circle bgColor="rgba(47,223,132,1)" size="55px">
								<FiCheck fontSize="2.5rem" color="white" />
							</Circle>
						</Box>
						<Box w="full">
							<Text
								fontSize="16px"
								fontWeight="400"
								color="rgba(37,36,39,1)"
								textAlign="center"
							>
								{message}
							</Text>
						</Box>

						<Button w="full" mt="1rem" height="3rem" onClick={onClose}>
							Ok
						</Button>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default SuccessModal;
