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
import { buildingState } from "../Utilities/BuildingStates";
import { PrimaryDate } from "../Utilities/PrimaryDate";

const schema = yup.object().shape({
	buildingType: yup.string(),
	buildingState: yup.string(),
	propertyTypeId: yup.number().required(),
	dateNeeded: yup.string().required(),
	numberOfBathrooms: yup.string().required(),
	numberOfBedrooms: yup.string().required(),
	numberOfFloors: yup.string().required(),
});

export default function AddComplainCategory({
	result,
	onClose,
	isOpen,
}: {
	result: PropertyType[];
	onClose: () => void;
	isOpen: boolean;
}) {
	const [addComplain, { loading, data, error }] = useOperationMethod("");
	const {
		register,
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		formState: { errors, isValid },
	} = useForm<CleaningModel>({
		resolver: yupResolver(schema),
		mode: "all",
	});
	const { addToast } = useToasts();
	const router = useRouter();
	const [buildingType, setBuildingType] = useState("");

	setValue("buildingType", buildingType);

	const onSubmit = async (data: CleaningModel) => {
		data.dateNeeded = new Date(
			data.dateNeeded as unknown as Date
		).toLocaleDateString();

		try {
			const result = await (await addComplain(undefined, data)).data;

			if (result.status) {
				onClose();
				addToast("Job created sucessfully", {
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
										<PrimaryInput<CleaningModel>
											label="Category Name"
											name="numberOfBedrooms"
											error={errors.numberOfBedrooms}
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
									<form onSubmit={handleSubmit(onSubmit)}>
										<PrimarySelect<CleaningModel>
											register={register}
											error={errors.propertyTypeId}
											label="Select a Category"
											placeholder="Choose an option"
											name="propertyTypeId"
											fontSize="sm"
											options={
												<>
													{result.map((x: PropertyType) => {
														return <option value={x.id}>{x.name}</option>;
													})}
												</>
											}
										/>
										<PrimaryInput<CleaningModel>
											label="Sub-category"
											name="numberOfBedrooms"
											error={errors.numberOfBedrooms}
											placeholder="Add a subcategory"
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
							</TabPanels>
						</Tabs>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
