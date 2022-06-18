import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	GridItem,
	HStack,
	Image,
	SimpleGrid,
	Square,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Widget } from "@uploadcare/react-widget";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { LoginModel } from "types/AppTypes";
import Features from "./Features";
import { PrimaryInput } from "./PrimaryInput";
import PropertyDetails from "./PropertyDetails";
import { PrimaryTextarea } from "./Textarea";

function SingleListings() {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>();
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	return (
		<Box bgColor="white" p="1rem" minH="80vh">
			<Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
				<FaChevronLeft fontSize="20px" />
				<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
					3 Bedroom Terrace
				</Text>
			</Flex>
			<HStack align="flex-start" spacing="2rem" mt="3rem">
				<Flex w="65%" justify="space-between" pl="1.5rem">
					<form>
						<HStack align="flex-start" justify="space-between" spacing={8}>
							<SimpleGrid columns={2} gap={4} w="full">
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Name"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Property Title"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="No of Bedrooms"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="No of Toilets"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Price"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="State"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<FormControl w="100%">
										<FormLabel color="brand.100" fontSize="1rem">
											Add Images
										</FormLabel>
										<HStack
											spacing={4}
											overflowX="auto"
											h="auto"
											pb="1rem"
											w="100%"
										>
											<Box>
												<Widget
													publicKey="fda3a71102659f95625f"
													// onChange={onChange}
												/>
											</Box>
											<Square
												size="71px"
												borderRadius="6px"
												overflow="hidden"
												bg="grey"
												position="relative"
											>
												<Image src="" w="full" h="full" objectFit="cover" />
												<Square
													size="28px"
													bgColor="rgba(227,188,106,1)"
													borderRadius="6px 0 6px 0"
													color="white"
													pos="absolute"
													top="0"
													left="0"
													display="flex"
												>
													<FaCheck />
												</Square>
											</Square>
										</HStack>
									</FormControl>
								</GridItem>
								<GridItem colSpan={2}>
									<FormControl>
										<FormLabel color="brand.100" fontSize="1rem">
											Add Interactive 3D Tour
										</FormLabel>
										<Widget
											publicKey="fda3a71102659f95625f"
											// onChange={onChange}
										/>
									</FormControl>
								</GridItem>
							</SimpleGrid>
							<SimpleGrid columns={2} gap={4} w="full">
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Locality"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Area"
										placeholder=""
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<PrimaryInput<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Area/Size"
										placeholder=""
									/>
								</GridItem>

								<GridItem colSpan={2}>
									<PrimaryTextarea<LoginModel>
										register={register}
										name="password"
										error={errors.password}
										defaultValue=""
										type="text"
										label="Description"
										placeholder=""
										h="261px"
									/>
								</GridItem>
							</SimpleGrid>
						</HStack>
						<SimpleGrid columns={2}>
							<GridItem colSpan={1}>
								<Button w="full" mt="4rem" height="3rem" type="submit">
									Update
								</Button>
							</GridItem>
						</SimpleGrid>
					</form>
				</Flex>
				<VStack spacing={6} w="35%">
					<Box w="180px">
						<Flex
							as="button"
							w="full"
							h="2.3rem"
							borderRadius="3px"
							border="2px solid rgba(25,25,25,1)"
							align="center"
							justify="center"
							fontSize="14.5px"
							fontWeight="bold"
						>
							Reload View
						</Flex>
					</Box>
					<PropertyDetails />
				</VStack>
			</HStack>
		</Box>
	);
}

export default SingleListings;
