import {
	Button,
	FormControl,
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
import { Widget } from "@uploadcare/react-widget";

function AddMatch({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
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
				maxWidth="80%"
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
						Add a New Match
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<form>
						<VStack maxH="80vh" overflowY="auto" px={5}>
							<VStack spacing="1rem" alignItems="flex-start" w="full">
								<form>
									<HStack align="flex-start" justify="space-between">
										<SimpleGrid columns={2} gap={4}>
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
												<Select
													placeholder="Status"
													w="full"
													borderBottom="2px solid black"
													border="0"
													borderRadius="0"
													bgColor="rgba(25,25,25,.03)"
													color="rgba(37,36,39,1)"
													fontSize="16px"
													fontWeight="600"
													my="1rem"
												>
													<option value="option1">Option 1</option>
													<option value="option2">Option 2</option>
													<option value="option3">Option 3</option>
												</Select>
											</GridItem>
											<GridItem colSpan={2}>
												<FormControl>
													<FormLabel color="brand.100" fontSize="1rem">
														Add Images
													</FormLabel>
													<Widget
														publicKey="fda3a71102659f95625f"
														// onChange={onChange}
													/>
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
										<SimpleGrid columns={2} gap={4}>
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
													label="Seller's Price"
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
													label="Commission"
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
													label="Seller Mobile Number"
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
													label="Seller Email"
													placeholder=""
												/>
											</GridItem>
											<GridItem colSpan={2}>
												<Select
													placeholder="Assign Rep"
													w="full"
													borderBottom="2px solid black"
													border="0"
													borderRadius="0"
													bgColor="rgba(25,25,25,.03)"
													color="rgba(37,36,39,1)"
													fontSize="16px"
													fontWeight="600"
													my="1rem"
												>
													<option value="option1">Option 1</option>
													<option value="option2">Option 2</option>
													<option value="option3">Option 3</option>
												</Select>
											</GridItem>
										</SimpleGrid>
									</HStack>
									<SimpleGrid columns={4}>
										<GridItem colSpan={2} gridColumnStart={2} gridColumnEnd={4}>
											<Button w="full" mt="4rem" height="3rem" type="submit">
												Update
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
export default AddMatch;
