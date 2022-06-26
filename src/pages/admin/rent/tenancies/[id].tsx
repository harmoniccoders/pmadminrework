import {
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	Image,
	Divider,
	Square,
	useDisclosure,
} from "@chakra-ui/react";
import NameTag from "lib/components/NameTag";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronLeft, FaTrash } from "react-icons/fa";
import Icons from "lib/components/Utilities/Icons";
import { DataAccess } from "lib/Utils/Api";
import { returnUserData } from "lib/components/Utilities/UserData";
import { GetServerSideProps } from "next";
import Naira from "lib/components/Utilities/Naira";
import ViewTenantComplaints from "lib/components/Modals/ViewTenantComplaints";
const moment = require("moment");

function ActiveTenancy({ tenancy, id }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	const singleTenancy = tenancy.value.filter((x: any) => x.id == id)[0];
	const owner = singleTenancy.owner;
	const tenant = singleTenancy.tenant;
	// console.log({ singleTenancy });

	const [showLandlord, setShowLandlord] = useState(false);
	const [showTenant, setShowTenant] = useState(false);

	return (
		<Box bgColor="white" px="2rem" minH="80vh" pb="2rem" pos="relative">
			<Box
				w="2px"
				bgColor="#d4d4d4"
				h="full"
				pos="absolute"
				left="33%"
				transform="translateX(-50%)"
			></Box>
			<Box
				w="2px"
				bgColor="#d4d4d4"
				h="full"
				pos="absolute"
				left="66%"
				transform="translateX(-50%)"
			></Box>
			<Box
				w="full"
				bgColor="#d4d4d4"
				h="2px"
				pos="absolute"
				top="11%"
				left="0"
			></Box>
			<Flex justifyContent="space-between" align="center">
				<Box>
					<Flex
						fontSize="14px"
						fontWeight="500"
						bgColor="brand.300"
						borderRadius="4px"
						color="black"
						px="1rem"
						height="1.5rem"
						justifyContent="center"
						align="center"
						w="fit-content"
						mt="1rem"
						textTransform="capitalize"
					>
						{`${singleTenancy.status.toLowerCase()} Tenancy`}
					</Flex>
					<Flex
						align="center"
						mb="1rem"
						cursor="pointer"
						onClick={goBack}
						py="1rem"
					>
						<FaChevronLeft fontSize="20px" />
						<Text
							fontSize="24px"
							fontWeight="bold"
							pl="1rem"
							mb="0 !important"
							textTransform="capitalize"
						>
							{singleTenancy.property.name}
						</Text>
					</Flex>
				</Box>
				<Box cursor="pointer">
					<FaTrash />
				</Box>
			</Flex>
			<HStack align="flex-start" h="full">
				<Box w="33%">
					<HStack w="100%" spacing="6rem" align="flex-start" pr="2rem">
						<VStack spacing="1rem" alignItems="flex-start" w="full">
							<Text fontSize="1.1rem" fontWeight="bold" mb="0 !important">
								Owner
							</Text>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="600"
									mb=".5rem"
									color="rgba(15,15,15,.5)"
								>
									Passport Photograph
								</Text>
								<Square
									overflow="hidden"
									borderRadius="8px"
									size="100px"
									mb="1rem"
									bgColor="gray.500"
								>
									<Image
										src={owner.passportPhotograph?.url || ""}
										w="full"
										h="full"
										objectFit="cover"
									/>
								</Square>
							</Box>
							<NameTag title="First Name" name={owner.firstName} />
							<NameTag title="Middlename" name={owner?.middleName || "-"} />
							<NameTag title="Surname" name={owner.lastName} />
							<NameTag title="Mobile Number" name={owner.phoneNumber} />
							<NameTag title="Email" name={owner.email} />
							<Box w="95%" onClick={() => setShowLandlord(!showLandlord)}>
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
									my="1rem"
								>
									{showLandlord
										? "Hide Owner's Details"
										: "See Owner's Details"}
								</Flex>
							</Box>
							{showLandlord && (
								<>
									<NameTag
										title="Current Residential Address"
										name={owner.address}
									/>
									<NameTag
										title="Date of Birth"
										name={moment(owner.dataOfBirth).format("DD/MM/YYYY")}
									/>
									<NameTag title="Nationality" name={owner.nationality} />
									<NameTag title="Marital Status" name={owner.maritalStatus} />
									<NameTag title="Occupation" name={owner.occupation} />
									<NameTag title="Employer" name={owner.companyName} />
								</>
							)}
							<Text fontSize="1.1rem" fontWeight="bold" mt="1rem !important">
								Remittance
							</Text>
							<NameTag
								title="Frequency"
								name={
									singleTenancy.property.rentCollectionTypeId == 1
										? "Weekly"
										: singleTenancy.property.rentCollectionTypeId == 2
										? "Monthly"
										: "Yearly"
								}
							/>
							<NameTag
								title="Next Payment Date"
								name={moment(singleTenancy.nextDueDate).format("DD/MM/YYYY")}
							/>
							<NameTag title="Bank" name={owner.bank} />
							<NameTag title="Account Number" name={owner.accountNumber} />
						</VStack>
					</HStack>
				</Box>
				<Box w="33%">
					<HStack w="100%" spacing="6rem" align="flex-start" pl="1rem">
						<VStack spacing="1rem" alignItems="flex-start" w="full">
							<Text fontSize="1.1rem" fontWeight="bold" mb="0 !important">
								Tenant
							</Text>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="600"
									mb=".5rem"
									color="rgba(15,15,15,.5)"
								>
									Passport Photograph
								</Text>
								<Square
									overflow="hidden"
									borderRadius="8px"
									size="100px"
									mb="1rem"
									bgColor="gray.500"
								>
									<Image
										src={tenant.passportPhotograph?.url || ""}
										w="full"
										h="full"
										objectFit="cover"
									/>
								</Square>
							</Box>
							<NameTag title="First Name" name={tenant.firstName} />
							<NameTag title="Middlename" name={tenant?.middleName || "-"} />
							<NameTag title="Surname" name={tenant.lastName} />
							<NameTag title="Mobile Number" name={tenant.phoneNumber} />
							<NameTag title="Email" name={tenant.email} />
							<Box w="95%" onClick={() => setShowTenant(!showTenant)}>
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
									my="1rem"
								>
									{showTenant
										? "Hide Tenant's Details"
										: "See Tenant's Details"}
								</Flex>
							</Box>
							{showTenant && (
								<>
									<NameTag
										title="Current Residential Address"
										name={tenant.address}
									/>
									<NameTag
										title="Date of Birth"
										name={moment(tenant.dataOfBirth).format("DD/MM/YYYY")}
									/>
									<NameTag title="Nationality" name={tenant.nationality} />
									<NameTag title="Marital Status" name={tenant.maritalStatus} />
									<NameTag title="Occupation" name={tenant.occupation} />
									<NameTag title="Employer" name={tenant.companyName} />
								</>
							)}
						</VStack>
					</HStack>
				</Box>
				<Box w="33%">
					<HStack w="100%" spacing="6rem" align="flex-start" pl="2rem">
						<VStack spacing="1rem" alignItems="flex-start" w="full">
							<Text fontSize="1.1rem" fontWeight="bold" mb="0 !important">
								Property
							</Text>
							<NameTag
								title="Annual Rent"
								name={Naira(singleTenancy.property.price)}
							/>
							<Box
								w="full"
								border="1px solid gray"
								mt=".2rem"
								p=".75rem"
								borderRadius="4px"
								cursor="pointer"
							>
								<HStack onClick={onOpen}>
									<Icons iconClass="fa-house-damage" />
									<Text
										fontSize="1rem"
										fontWeight="500"
										whiteSpace="nowrap"
										ml="4px"
									>
										Complaints
									</Text>
								</HStack>
							</Box>
							<Box
								w="full"
								border="1px solid gray"
								mt=".2rem"
								p=".75rem"
								borderRadius="4px"
								cursor="pointer"
							>
								<HStack>
									<Icons iconClass="fa-file-alt" />
									<Text
										fontSize="1rem"
										fontWeight="500"
										whiteSpace="nowrap"
										ml="4px"
									>
										Tenancy Agreement
									</Text>
								</HStack>
							</Box>
						</VStack>
					</HStack>
				</Box>
			</HStack>
			<ViewTenantComplaints
				isOpen={isOpen}
				onClose={onClose}
				data={singleTenancy}
			/>
		</Box>
	);
}

export default ActiveTenancy;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {
		data: { user, redirect },
	} = returnUserData(ctx);
	if (redirect)
		return {
			redirect: {
				permanent: false,
				destination: "/admin",
			},
			props: {},
		};
	const bearer = `Bearer ${ctx.req.cookies.token}`;
	const _dataAccess = new DataAccess(bearer);
	let { url, id } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=8&offset=0&";
	}
	url = url ?? "limit=8&offset=0&";

	try {
		const tenancy = (await _dataAccess.get(`/api/Admin/tenancies?${url}/${id}`))
			.data;

		return {
			props: {
				tenancy,
				id,
			},
		};
	} catch (error) {
		return {
			props: {
				data: [],
			},
		};
	}
};
