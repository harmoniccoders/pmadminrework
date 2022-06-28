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
import { FaChevronLeft } from "react-icons/fa";
import ViewListings from "lib/components/Modals/ViewListings";
import { DataAccess } from "lib/Utils/Api";
import { returnUserData } from "lib/components/Utilities/UserData";
import { GetServerSideProps } from "next";
const moment = require("moment");

function SingleApplication({ data, id }: any) {
	const results = data.value.filter((x: any) => x.id == id)[0];
	const singleProperty = results.property;

	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const goBack = () => {
		router.back();
	};

	return (
		<Box bgColor="white" px="2rem" minH="80vh" pb="2rem" pos="relative">
			<Box
				w="2px"
				bgColor="#d4d4d4"
				h="full"
				pos="absolute"
				left="50%"
				transform="translateX(-50%)"
			></Box>
			<Flex justifyContent="space-between" align="center">
				<Flex
					align="center"
					my="1rem"
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
						{results.property.name}
					</Text>
				</Flex>
				<Box w="180px" onClick={onOpen}>
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
						View Property
					</Flex>
				</Box>
			</Flex>
			<HStack align="flex-start" h="full">
				<Box w="50%">
					<HStack w="100%" spacing="6rem" align="flex-start">
						<VStack spacing="1rem" alignItems="flex-start">
							<Text fontSize="1.1rem" fontWeight="bold" mb="0 !important">
								Applicant's Details
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
										src={results.user.passportPhotograph?.url || ""}
										w="full"
										h="full"
										objectFit="cover"
									/>
								</Square>
							</Box>
							<NameTag
								title="Application Date"
								name={moment(results.dateCreated).format("DD/MM/YY")}
							/>
							<NameTag title="First Name" name={results.user?.firstName} />
							<NameTag
								title="Middlename"
								name={results.user?.middleName || "-"}
							/>
							<NameTag title="Surname" name={results.user?.lastName} />
							<NameTag title="Mobile Number" name={results.user?.phoneNumber} />
							<NameTag title="Email" name={results.user?.email} />
							<NameTag
								title="Current Residential Address"
								name={results.user?.address}
							/>
							<NameTag
								title="Date of Birth"
								name={moment(results.user?.dateOfBirth).format("DD/MM/YYYY")}
							/>
							<NameTag title="Nationality" name={results.user?.nationality} />
							<NameTag
								title="Marital Status"
								name={results.user?.maritalStatus}
							/>
							<NameTag title="Occupation" name={results.user?.occupation} />
							<NameTag title="Employer" name={results.user?.companyName} />
						</VStack>
						<VStack spacing="1rem" alignItems="flex-start">
							<Text
								fontSize="1.1rem"
								fontWeight="bold"
								mb="0 !important"
								opacity="0"
							>
								Applicant's Details
							</Text>
							<Box>
								<Text
									fontSize="12px"
									fontWeight="600"
									mb=".5rem"
									color="rgba(15,15,15,.5)"
								>
									Work Id
								</Text>
								<Box
									overflow="hidden"
									borderRadius="8px"
									width="150px"
									h="100px"
									mb="1rem"
									bgColor="gray.500"
								>
									<Image
										src={results.user?.workId?.url || ""}
										w="full"
										h="full"
										objectFit="cover"
									/>
								</Box>
							</Box>
							<NameTag title="Work Address" name={results.user.workAddress} />
							<NameTag
								title="Annual Income"
								name={results.user?.annualIncome}
							/>
							<Text fontSize="1.1rem" fontWeight="bold" mt="1rem !important">
								Next of Kin
							</Text>
							<NameTag title="First Name" name={results.nextOfKin?.firstName} />
							<NameTag title="Surname" name={results.nextOfKin?.lastName} />
							<NameTag
								title="Relationship"
								name={results.nextOfKin?.relationship}
							/>
							<NameTag
								title="Mobile Number"
								name={results.nextOfKin?.phoneNumber}
							/>
							<NameTag title="Email" name={results.nextOfKin?.email} />
							<NameTag title="Address" name={results.nextOfKin?.address} />
						</VStack>
					</HStack>
				</Box>
				<Divider orientation="vertical" />
				<Box w="50%">
					<HStack w="100%" spacing={10} px="2rem">
						<VStack spacing="1rem" alignItems="flex-start">
							<Text fontSize="1.1rem" fontWeight="bold" mt="1rem !important">
								Owner's Details
							</Text>
							<NameTag
								title="Name"
								name={`${results.property?.createdByUser?.firstName} ${results.property?.createdByUser?.lastName}`}
							/>
							<NameTag
								title="Email"
								name={results.property?.createdByUser?.email}
							/>
							<NameTag
								title="Mobile Number"
								name={results.property?.createdByUser?.phoneNumber}
							/>
							<Text fontSize="1.1rem" fontWeight="bold" mt="1rem !important">
								Owner's Requirement
							</Text>
							<NameTag
								title="Management"
								name={results.property?.sellMyself ? "Self" : "PM"}
							/>
							<NameTag
								title="Tenant Type"
								name={
									results.property.tenantTypeId == 1
										? "Individual"
										: results.property.tenantTypeId == 2
										? "Family"
										: "Corporate"
								}
							/>
							<NameTag
								title="Income Bracket"
								name={results.property?.createdByUser?.annualIncome}
							/>
							<NameTag
								title="Frequency of Rent Collection"
								name={
									results.property.rentCollectionTypeId == 1
										? "Weekly"
										: results.property.rentCollectionTypeId == 2
										? "Monthly"
										: "Yearly"
								}
							/>
						</VStack>
					</HStack>
				</Box>
			</HStack>
			<ViewListings isOpen={isOpen} onClose={onClose} data={singleProperty} />
		</Box>
	);
}

export default SingleApplication;

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
	const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
	const _dataAccess = new DataAccess(bearer);
	let { id } = ctx.query;

	try {
		const data = (await _dataAccess.get(`/api/Admin/applications/rent`)).data;

		return {
			props: {
				data,
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
