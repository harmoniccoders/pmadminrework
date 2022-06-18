import {
	Box,
	Button,
	Checkbox,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginModel } from "types/AppTypes";
import { PrimaryInput } from "../Utilities/PrimaryInput";
import { Widget } from "@uploadcare/react-widget";

function RequestStatus({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
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
				borderRadius="0"
				w={["88%", "48%"]}
				overflow="hidden"
				maxH="100vh"
				// maxWidth="80%"
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
						Request Update
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<form>
						<VStack maxH="80vh" overflowY="auto" px={5}>
							<VStack spacing="1rem" alignItems="flex-start" w="full">
								<form>
									<VStack align="flex-start" spacing={6}>
										<Flex
											borderBottom="2px solid black"
											px="1rem"
											bgColor="rgba(25,25,25,.03)"
											h="2.8rem"
											w="full"
											align="center"
										>
											<Checkbox
												colorScheme="transparent"
												defaultChecked
												spacing={4}
												iconColor="black"
												iconSize=".5rem"
												size="lg"
												borderColor="black"
											>
												Looking for matches
											</Checkbox>
										</Flex>
										<Flex
											borderBottom="2px solid black"
											px="1rem"
											bgColor="rgba(25,25,25,.03)"
											h="2.8rem"
											w="full"
											align="center"
										>
											<Checkbox
												colorScheme="transparent"
												spacing={4}
												iconColor="black"
												iconSize=".5rem"
												size="lg"
												borderColor="black"
											>
												Looking for matches
											</Checkbox>
										</Flex>
										<Flex
											borderBottom="2px solid black"
											px="1rem"
											bgColor="rgba(25,25,25,.03)"
											h="2.8rem"
											w="full"
											align="center"
										>
											<Checkbox
												colorScheme="transparent"
												spacing={4}
												iconColor="black"
												iconSize=".5rem"
												size="lg"
												borderColor="black"
											>
												Looking for matches
											</Checkbox>
										</Flex>
									</VStack>
									<Button w="full" mt="2rem" height="3rem" type="submit">
										Update
									</Button>
								</form>
							</VStack>
						</VStack>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default RequestStatus;
