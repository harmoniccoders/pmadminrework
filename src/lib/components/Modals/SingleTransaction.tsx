import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from "@chakra-ui/react";

export interface items {
	isOpen: boolean;
	onClose: any;
	title: string;
	amount: string;
	date: string;
	time: string;
	recepient: string;
	tranStatus: string;
	refrenceId: string;
}
function SingleTransaction({
	isOpen,
	onClose,
	title,
	amount,
	date,
	time,
	recepient,
	tranStatus,
	refrenceId,
}: items) {
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
				mt="1rem"
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
						{title}
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box maxH="80vh" overflowY="hidden" px={5}>
						<VStack alignItems="flex-start" spacing={6}>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Transaction Name
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{title}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Amount
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{amount}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Date
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{date}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Time
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{time}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Recepient
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{recepient}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Transaction Status
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{tranStatus}
								</Text>
							</Box>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="medium"
									color="rgba(15,15,15,.5)"
								>
									Transaction Reference ID
								</Text>
								<Text
									fontSize="14px"
									fontWeight="medium"
									color="rgba(15,15,15,1)"
								>
									{refrenceId}
								</Text>
							</Box>
						</VStack>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default SingleTransaction;
