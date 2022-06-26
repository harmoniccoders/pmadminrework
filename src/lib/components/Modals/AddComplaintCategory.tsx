import {
	Box,
	Text,
	Button,
	VStack,
	HStack,
	ModalBody,
	ModalHeader,
	Flex,
	Modal,
	ModalContent,
	ModalOverlay,
	Icon,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CleaningModel, PropertyType } from "types/api";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { useState } from "react";

import { PrimaryInput } from "../Utilities/PrimaryInput";
import { MdClose } from "react-icons/md";
import { PrimarySelect } from "../Utilities/PrimarySelect";
import { ComplaintsCategory, NameModel } from "Services";

const schema = yup.object().shape({
	name: yup.string().required(),
});

interface ComplaintsSub {
	name: string;
	complantsCategoryId: number;
}

export default function AddComplainCategory({
	result,
	onClose,
	isOpen,
}: {
	result: PropertyType[];
	onClose: () => void;
	isOpen: boolean;
}) {
	const [addComplain, { loading, data, error }] = useOperationMethod(
		"Complaintscategoriescreate"
	);
	const {
		register,
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		formState: { errors, isValid },
	} = useForm<NameModel>({
		resolver: yupResolver(schema),
		mode: "all",
	});
	const { addToast } = useToasts();
	const router = useRouter();

	const onSubmit = async (data: NameModel) => {
		try {
			const result = await (await addComplain(undefined, data)).data;

			if (result.status) {
				onClose();
				addToast("Sucessful", {
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

	const [addComplainSub, { loading: isLoading, data: isData, error: isError }] =
		useOperationMethod("Complaintssubcategorycreate");
	const {
		register: reg,
		handleSubmit: hnd,
		control: ctr,
		formState: { errors: err, isValid: isv },
	} = useForm<ComplaintsSub>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const categorySubmit = async (data: ComplaintsSub) => {
		try {
			const result = await (await addComplainSub(undefined, data)).data;

			if (result.status) {
				onClose();
				addToast("Sucessful", {
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
			isOpen={isOpen}
			onClose={onClose}
			size="lg"
			motionPreset="slideInBottom"
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(10deg)"
			/>

			<ModalContent
				py={5}
				borderRadius="0"
				overflowY="auto"
				maxH="100vh"
				pos="fixed"
			>
				<ModalHeader
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						Add Complaints Category
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<Box width="90%" mx="auto" mt={["1.875rem", "2.3rem"]}>
						<Tabs isFitted variant="enclosed">
							<TabList mb="1em">
								<Tab>Add New Category</Tab>
								<Tab>Add Sub-category</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<form onSubmit={handleSubmit(onSubmit)}>
										<PrimaryInput<NameModel>
											label="Category Name"
											name="name"
											error={errors.name}
											placeholder="Give this category a name"
											defaultValue=""
											register={register}
										/>
										<Button
											w="full"
											mt="4rem"
											height="3rem"
											type="submit"
											isLoading={loading}
											disabled={!isValid}
										>
											Proceed
										</Button>
									</form>
								</TabPanel>
								<TabPanel>
									<form onSubmit={hnd(categorySubmit)}>
										<PrimarySelect<ComplaintsSub>
											register={reg}
											error={err.complantsCategoryId}
											label="Select a Category"
											placeholder="Choose an option"
											name="complantsCategoryId"
											fontSize="sm"
											options={
												<>
													{result.map((x: any) => {
														return <option value={x.id}>{x.name}</option>;
													})}
												</>
											}
										/>
										<PrimaryInput<ComplaintsSub>
											label="Sub-category"
											name="name"
											error={errors.name}
											placeholder="Add a subcategory"
											defaultValue=""
											register={reg}
										/>
										<Button
											w="full"
											mt="4rem"
											height="3rem"
											type="submit"
											isLoading={isLoading}
											disabled={!isv}
										>
											Proceed
										</Button>
									</form>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
