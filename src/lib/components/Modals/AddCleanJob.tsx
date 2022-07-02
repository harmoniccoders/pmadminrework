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
import PrimaryState from "../Utilities/PrimaryState";

const schema = yup.object().shape({
	buildingType: yup.string(),
	buildingState: yup.string(),
	propertyTypeId: yup.number().required(),
	dateNeeded: yup.string().required(),
	numberOfBathrooms: yup.string().required(),
	numberOfBedrooms: yup.string().required(),
	numberOfFloors: yup.string().required(),
});

const AddCleanJob = ({
	result,
	onClose,
	isOpen,
}: {
	result: PropertyType[];
	onClose: () => void;
	isOpen: boolean;
}) => {
	const [RequestCleaning, { loading, data, error }] =
		useOperationMethod("Cleanrequest");
	const {
		register,
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		watch,
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
			const result = await (await RequestCleaning(undefined, data)).data;

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
				overflowY="scroll"
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
						Add Clean Job
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<Box width="90%" mx="auto" mt={["1.875rem", "2.3rem"]}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box mt="5">
								<Text fontSize="sm" fontWeight="500">
									Is the building residential or commercial?
								</Text>

								<HStack mt={1} spacing={4}>
									<Button
										height="2.5rem"
										fontSize="sm"
										color="brand.100"
										onClick={() => setBuildingType("residential")}
										variant={
											buildingType == "residential" ? "solid" : "outline"
										}
									>
										Residential
									</Button>
									<Button
										fontSize="sm"
										height="2.5rem"
										color="brand.100"
										onClick={() => setBuildingType("commercial")}
										variant={buildingType == "commercial" ? "solid" : "outline"}
									>
										Commercial
									</Button>
								</HStack>
							</Box>
							<PrimarySelect<CleaningModel>
								register={register}
								error={errors.propertyTypeId}
								label="Building Type"
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
							<PrimarySelect<CleaningModel>
								register={register}
								error={errors.buildingState}
								label="Building State"
								placeholder="Choose an option"
								name="buildingState"
								fontSize="sm"
								options={
									<>
										{buildingState.map((x: any) => {
											return <option value={x.name}>{x.name}</option>;
										})}
									</>
								}
							/>
							<PrimaryState
								register={register}
								error={errors.location}
								name="location"
								getValues={getValues}
								watch={watch}
							/>

							<PrimaryDate<CleaningModel>
								label="Preferred Date"
								name="dateNeeded"
								error={errors.dateNeeded}
								register={register}
								control={control}
								minDate={new Date()}
								maxDate={new Date(2023, 10, 1)}
								fontSize="sm"
							/>

							<PrimaryInput<CleaningModel>
								label="No. of Bedrooms"
								name="numberOfBedrooms"
								error={errors.numberOfBedrooms}
								placeholder=""
								defaultValue=""
								register={register}
							/>
							<PrimaryInput<CleaningModel>
								label="No. of Toilets"
								name="numberOfBathrooms"
								error={errors.numberOfBathrooms}
								placeholder=""
								defaultValue=""
								register={register}
							/>
							<PrimaryInput<CleaningModel>
								label="No. of Floors"
								name="numberOfFloors"
								error={errors.numberOfFloors}
								placeholder=""
								defaultValue=""
								register={register}
							/>
							<Button
								w="full"
								mt="4rem"
								height="3rem"
								type="submit"
								isLoading={loading}
								// disabled={!isValid}
							>
								Add Job
							</Button>
						</form>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default AddCleanJob;
