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

function AddNewAdmin({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
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
						Add Admin
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<form>
						<VStack maxH="80vh" overflowY="auto" px={5}>
							<VStack spacing="1rem" alignItems="flex-start" w="full">
								<form>
									<SimpleGrid columns={2} gap={3}>
										<GridItem colSpan={2}>
											<PrimaryInput<LoginModel>
												register={register}
												name="password"
												error={errors.password}
												defaultValue=""
												type="text"
												label="Plan name"
												placeholder="First Name"
											/>
										</GridItem>
										<GridItem colSpan={2}>
											<PrimaryInput<LoginModel>
												register={register}
												name="password"
												error={errors.password}
												defaultValue=""
												type="text"
												label="Surname"
												placeholder="Surname"
											/>
										</GridItem>
										<GridItem colSpan={2}>
											<PrimaryInput<LoginModel>
												register={register}
												name="password"
												error={errors.password}
												defaultValue=""
												type="text"
												label="Email"
												placeholder="Email"
											/>
										</GridItem>
										<GridItem colSpan={2}>
											<Button w="full" mt="2rem" height="3rem" type="submit">
												Add
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
export default AddNewAdmin;
