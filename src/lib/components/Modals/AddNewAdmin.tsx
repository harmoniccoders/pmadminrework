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
import { PrimaryInput } from "../Utilities/PrimaryInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Register } from "Services";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";

const schema = yup.object().shape({
	email: yup.string().required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
});

function AddNewAdmin({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<Register>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const { addToast } = useToasts();
	const router = useRouter();

	const [addAdmin, { loading, data, error }] =
		useOperationMethod("Admincreate");

	const onSubmit = async (data: Register) => {
		try {
			const result = await (await addAdmin(undefined, data)).data;
			if (result.status) {
				onClose();
				addToast(result.message, {
					appearance: "success",
					autoDismiss: true,
				});
				router.reload();
				return;
			}
			onClose();
			addToast(result.message, {
				appearance: "error",
				autoDismiss: true,
			});
			return;
		} catch (err) {}
	};
	return (
		<Modal
			motionPreset="slideInBottom"
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(10deg)"
			/>
			<ModalContent
				py={5}
				borderRadius="0px"
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
						Add a New Admin
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack maxH="80vh" overflowY="auto" px={5}>
						<VStack spacing="1rem" alignItems="flex-start" w="full">
							<form onSubmit={handleSubmit(onSubmit)}>
								<SimpleGrid columns={2} gap={3}>
									<GridItem colSpan={2}>
										<PrimaryInput<Register>
											register={register}
											name="firstName"
											error={errors.firstName}
											defaultValue=""
											type="text"
											label="First name"
											placeholder="First Name"
										/>
									</GridItem>
									<GridItem colSpan={2}>
										<PrimaryInput<Register>
											register={register}
											name="lastName"
											error={errors.lastName}
											defaultValue=""
											type="text"
											label="Surname"
											placeholder="Surname"
										/>
									</GridItem>
									<GridItem colSpan={2}>
										<PrimaryInput<Register>
											register={register}
											name="email"
											error={errors.email}
											defaultValue=""
											type="text"
											label="Email"
											placeholder="Email"
										/>
									</GridItem>
									<GridItem colSpan={2}>
										<Button
											w="full"
											mt="2rem"
											height="3rem"
											type="submit"
											isLoading={loading}
											disabled={!isValid}
										>
											Add Admin
										</Button>
									</GridItem>
								</SimpleGrid>
							</form>
						</VStack>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default AddNewAdmin;
