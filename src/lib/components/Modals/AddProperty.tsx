import {
	Box,
	Button,
	Flex,
	Image,
	AspectRatio,
	GridItem,
	HStack,
	Icon,
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
import { Widget } from "@uploadcare/react-widget";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { useOperationMethod } from "react-openapi-client";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { BiImage, BiPlus } from "react-icons/bi";
import { SRLWrapper } from "simple-react-lightbox";
import Geocode from "react-geocode";
import { Parameters } from "openapi-client-axios";
import {
	MediaModel,
	PropertyModel,
	PropertyTitle,
	PropertyType,
} from "Services";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { PrimarySelect } from "../Utilities/PrimarySelect";
import { PrimaryEditor } from "../Utilities/PrimaryEditor";
import { CurrencyField } from "../Utilities/CurrencyInput";
import { MdClose } from "react-icons/md";
import PrimaryState from "../Utilities/PrimaryState";

type Props = {
	isOpen: boolean;
	onClose: any;
	propertyTitles: PropertyType[];
	propertyTypes: PropertyTitle[];
	item: any;
	isRent?: boolean;
	isSale?: boolean;
};

function AddProperty({
	isOpen,
	onClose,
	propertyTitles,
	propertyTypes,
	isRent,
	isSale,
}: Props) {
	const [PropertyCreate, { loading, data, error }] = useOperationMethod(
		"Adminpropertycreate"
	);
	const [uploadedMedia, setUploadedMedia] = useState<MediaModel[]>([]);
	const schema = yup.object().shape({
		address: yup.string().required(),
		description: yup.string().required(),
		title: yup.string().required(),
		area: yup.string().required(),
		lga: yup.string().required(),
		state: yup.string().required(),
		propertyTypeId: yup.number().required(),
		name: yup.string().required(),
		numberOfBathrooms: yup.string().required(),
		numberOfBedrooms: yup.string().required(),
		price: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		control,
		watch,
		getValues,
		setValue,
		formState: { errors, isValid },
	} = useForm<PropertyModel>({
		resolver: yupResolver(schema),
		mode: "all",
		defaultValues: {
			sellMyself: false,
			isForRent: isRent,
			isForSale: isSale,
		},
	});

	const widgetApi = useRef();
	const widgetApis = useRef();

	let uploaded;
	const onChangeImg = async (info: any, type: boolean) => {
		console.log("Upload completed:", info);
		uploaded = await groupInfo(info.uuid);

		let newArr = [info.count];

		console.log(newArr.length);
		console.log({ uploaded });
		let medias: MediaModel[] = [];

		uploaded.files.forEach((file: any) => {
			let newMedia: MediaModel = {
				url: file.original_file_url,
				isImage: type ? true : false,
				isVideo: !type ? true : false,
				name: "",
				extention: "",
				base64String: "",
			};

			medias.push(newMedia);
		});

		setUploadedMedia([...uploadedMedia, ...medias]);
	};

	const groupInfo = async (uuid: string) => {
		const result = await fetch(`https://api.uploadcare.com/groups/${uuid}/`, {
			headers: {
				Accept: "application/vnd.uploadcare-v0.5+json",
				authorization:
					"Uploadcare.Simple fda3a71102659f95625f:dcdc4ba3595b6be5fc0d",
			},
		});

		let res = await result.json();
		return res;
	};

	const { addToast } = useToasts();
	const router = useRouter();
	Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string);
	Geocode.setRegion("ng");
	//@ts-ignore
	Geocode.setLocationType("ROOFTOP");
	Geocode.enableDebug();

	const getLongAndLat = async (values: PropertyModel) => {
		console.log("here");
		try {
			const { results } = await Geocode.fromAddress(values.address);
			// console.log(results);
			values.latitude = results[0].geometry.location.lat;
			values.longitude = results[0].geometry.location.lng;
			return values;
		} catch (error) {
			return values;
		}
	};
	const onSubmit = async (data: PropertyModel) => {
		await getLongAndLat(data);
		data.sellMyself = data.sellMyself as boolean;
		data.mediaFiles = uploadedMedia;
		console.log({ data });

		try {
			const result = await (await PropertyCreate(undefined, data)).data;

			if (result.status) {
				addToast(result.message, {
					appearance: "success",
					autoDismiss: true,
				});
				onClose();
				router.reload();
				return;
			}
			addToast(result.message, {
				appearance: "error",
				autoDismiss: true,
			});
			onClose();
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
				borderRadius="0"
				w={["88%", "80%"]}
				overflow="hidden"
				maxH="100vh"
				maxWidth="80%"
				mt="0"
				mb="0"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
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
						Reject Property
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<VStack maxH="80vh" overflowY="auto" px={5}>
						<VStack spacing="1rem" alignItems="flex-start" w="full">
							<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
								<HStack
									align="flex-start"
									justify="space-between"
									spacing="3rem"
								>
									<Box w="full">
										<PrimaryInput<PropertyModel>
											label="Property Name"
											name="name"
											error={errors.name}
											placeholder=""
											defaultValue=""
											register={register}
										/>

										<PrimarySelect<PropertyModel>
											register={register}
											error={errors.title}
											label="Legal Title"
											placeholder=""
											name="title"
											options={
												<>
													{propertyTitles.map((x: PropertyType) => {
														return (
															<option value={x.name as string}>{x.name}</option>
														);
													})}
												</>
											}
										/>
										<PrimarySelect<PropertyModel>
											register={register}
											error={errors.propertyTypeId}
											label="Type"
											placeholder=""
											name="propertyTypeId"
											options={
												<>
													{propertyTypes.map((x: PropertyType) => {
														return <option value={x.id}>{x.name}</option>;
													})}
												</>
											}
										/>
										<PrimaryInput<PropertyModel>
											label="No. of Bedrooms"
											name="numberOfBedrooms"
											error={errors.numberOfBedrooms}
											placeholder=""
											defaultValue=""
											register={register}
										/>
										<PrimaryInput<PropertyModel>
											label="No. of Toilets"
											name="numberOfBathrooms"
											error={errors.numberOfBathrooms}
											placeholder=""
											defaultValue=""
											register={register}
										/>
										<CurrencyField<PropertyModel>
											placeholder=""
											defaultValue=""
											register={register}
											error={errors.price}
											name={"price"}
											control={control}
											label="Price"
										/>
										<PrimaryState
											register={register}
											error={errors.state}
											errors={errors.lga}
											name="state"
											getValues={getValues}
											watch={watch}
										/>
										<PrimaryInput<PropertyModel>
											label="Landmark"
											name="area"
											placeholder="Nearest Landmark"
											error={errors.area}
											defaultValue=""
											register={register}
										/>
									</Box>
									<Box w="full">
										{/* <PrimaryInput<PropertyModel>
											label="Address"
											name="address"
											error={errors.address}
											defaultValue=""
											register={register}
										/> */}
										<PrimaryEditor<PropertyModel>
											name="description"
											control={control}
											label="Description"
											register={register}
											defaultValue=""
											error={errors.description}
										/>
										<Box>
											<Text fontWeight="500">Add Image</Text>
											<Widget
												publicKey="fda3a71102659f95625f"
												multiple
												imageShrink="640x480"
												multipleMax={9}
												imagePreviewMaxSize={9}
												imagesOnly
												onChange={(info) => onChangeImg(info, true)}
												//@ts-ignore
												ref={widgetApi}
											/>
											<HStack my="1rem" align="center" spacing="1rem">
												<Flex
													w="80px"
													h="80px"
													borderRadius="5px"
													bgColor="#DCE1E7"
													flexShrink={0}
													justifyContent="center"
													align="center"
													//@ts-ignore
													onClick={() => widgetApi.current.openDialog()}
												>
													<Icon as={BiPlus} />
												</Flex>
												{uploadedMedia.length > 0 && (
													<>
														<HStack w="full" spacing="1rem" overflow="auto">
															{uploadedMedia
																.filter((m) => m.isImage)
																.map((item: any) => {
																	return (
																		<SRLWrapper>
																			<Box
																				w="80px"
																				h="80px"
																				borderRadius="5px"
																				bgColor="brand.50"
																				flexShrink={0}
																				overflow="hidden"
																			>
																				<Image
																					src={item.url}
																					alt="propery-image"
																					w="100%"
																					height="100%"
																					objectFit="cover"
																				/>
																			</Box>
																		</SRLWrapper>
																	);
																})}
														</HStack>
													</>
												)}
											</HStack>
										</Box>
										<Box>
											<Text fontWeight="500">Add Video</Text>
											<Widget
												publicKey="fda3a71102659f95625f"
												//@ts-ignore
												id="file"
												multiple
												imageShrink="640x480"
												multipleMax={3}
												imagePreviewMaxSize={9}
												inputAcceptTypes={"video/*"}
												onChange={(info) => onChangeImg(info, false)}
												//@ts-ignore
												ref={widgetApis}
											/>
											<HStack my="1rem" align="center" spacing="1rem">
												<Flex
													w="80px"
													h="80px"
													borderRadius="5px"
													bgColor="#DCE1E7"
													flexShrink={0}
													justifyContent="center"
													align="center"
													//@ts-ignore
													onClick={() => widgetApis.current.openDialog()}
												>
													<Icon as={BiPlus} />
												</Flex>
												{uploadedMedia.length > 0 && (
													<>
														<HStack w="full" spacing="1rem" overflow="auto">
															{uploadedMedia
																.filter((m) => m.isVideo)
																.map((item: any) => {
																	return (
																		<SRLWrapper>
																			<Box
																				w="80px"
																				h="80px"
																				borderRadius="5px"
																				bgColor="brand.50"
																				flexShrink={0}
																				overflow="hidden"
																			>
																				<AspectRatio
																					maxW="150px"
																					w="full"
																					ratio={1}
																				>
																					<iframe
																						title="Interactive videp"
																						src={item.url as string}
																						allowFullScreen
																					/>
																				</AspectRatio>
																			</Box>
																		</SRLWrapper>
																	);
																})}
														</HStack>
													</>
												)}
											</HStack>
										</Box>
										<Button
											w="full"
											mt="4rem"
											height="3rem"
											type="submit"
											isLoading={loading}
										>
											Add Property
										</Button>
									</Box>
								</HStack>
							</form>
						</VStack>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default AddProperty;
