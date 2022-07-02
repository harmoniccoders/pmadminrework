import { Box, Flex, HStack, VStack, Text, Button } from "@chakra-ui/react";
import NameTag from "lib/components/NameTag";
import Naira from "lib/components/Utilities/Naira";
import { PrimaryInput } from "lib/components/Utilities/PrimaryInput";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useOperationMethod } from "react-openapi-client";
import { CleaningQuoteModel } from "Services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToasts } from "react-toast-notifications";
import { CurrencyField } from "lib/components/Utilities/CurrencyInput";
import { PrimaryDate } from "lib/components/Utilities/PrimaryDate";
import ApplicationBox from "lib/components/Utilities/ApplicationBox";
const moment = require("moment");

const schema = yup.object().shape({
	quote: yup.string().required(),
	proposedDate: yup.string().required(),
});
function SingleSession({ list, id }: any) {
	const SingleData = list.value.filter(
		(singleUser: any) => singleUser.id == id
	);
	const data = SingleData[0];
	// console.log({ data });
	const quote = data.cleaningQuotes[data.cleaningQuotes.length - 1];
	// console.log({ quote });

	const [currentTab, setCurrentTab] = useState("sessions");
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	const navigateTabs = (tabname: string) => {
		router.push(tabname);
	};
	const { addToast } = useToasts();

	const [addQuotes, { loading, data: IsData, error }] =
		useOperationMethod("Admincleanquote");
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm<CleaningQuoteModel>({
		resolver: yupResolver(schema),
		mode: "all",
		defaultValues: {
			cleaningId: id,
		},
	});

	const onSubmit = async (data: CleaningQuoteModel) => {
		data.proposedDate = new Date(
			data.proposedDate as unknown as Date
		).toLocaleDateString();

		try {
			const result = await (await addQuotes(undefined, data)).data;

			if (result.status) {
				addToast("Quote Sent", {
					appearance: "success",
					autoDismiss: true,
				});
				router.reload();
				return;
			}
			addToast(result.message, {
				appearance: "error",
				autoDismiss: true,
			});
			return;
		} catch (err) {}
	};

	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("/admin/cleaning/sessions")}>
					<SecondaryTab
						tabname="sessions"
						num={list.size}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/cleaning/cleaners")}>
					<SecondaryTab
						tabname="cleaner"
						num={0}
						icon="fa-users"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<HStack
				align="flex-start"
				minH="70vh"
				bgColor="white"
				py="2rem"
				px="2.5rem"
			>
				<Box w="30%">
					<Flex
						align="center"
						// my="1rem"
						cursor="pointer"
						onClick={goBack}
						pb="1rem"
					>
						<FaChevronLeft fontSize="20px" />
						<Text
							fontSize="24px"
							fontWeight="bold"
							pl="1rem"
							mb="0 !important"
							textTransform="capitalize"
						>
							{data.propertyType.toLowerCase()}
						</Text>
					</Flex>
					<Flex w="100%" justify="space-between">
						<VStack spacing="1rem" alignItems="flex-start">
							<NameTag title="User" name={data?.user?.fullName} />
							<NameTag
								title="Mobile Number"
								name={data?.user?.phoneNumber || "-"}
							/>
							<NameTag title="Email" name={data?.user?.email} />
							<NameTag title="Purpose" name={data?.buildingType} />
							<NameTag title="State" name={data.buildingState} />
							<NameTag title="Floors" name={data?.numberOfFloors} />
							<NameTag title="Location" name={data?.lga || "-"} />
							<NameTag
								title="Preferred Date"
								name={moment(data.dateNeeded).format("DD/MM/YY - LT")}
							/>
						</VStack>
					</Flex>
				</Box>
				<Box w="70%">
					<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
						<HStack w="full" align="flex-start" mt="3rem" spacing={8}>
							<Box w="50%">
								<Text fontSize="1.2rem" fontWeight="bold">
									Quotes
								</Text>

								<VStack w="full" spacing="1.5rem">
									{data.cleaningQuotes.length > 0 && (
										<ApplicationBox label={""} detail={Naira(quote?.quote)} />
									)}
									<CurrencyField<CleaningQuoteModel>
										placeholder=""
										defaultValue=""
										register={register}
										error={errors.quote}
										name={"quote"}
										control={control}
										label="Enter Amount"
									/>
									<Button
										variant="solid"
										type="submit"
										isLoading={loading}
										disabled={!isValid}
										w="full"
										height="3rem"
									>
										Send Quotes
									</Button>
								</VStack>
							</Box>
							<Box w="50%">
								<Text fontSize="1.2rem" fontWeight="bold">
									Proposed Date
								</Text>

								<VStack w="full" spacing="1.5rem">
									<PrimaryDate<CleaningQuoteModel>
										label="Proposed Date"
										name="proposedDate"
										error={errors.proposedDate}
										register={register}
										control={control}
										minDate={new Date()}
										maxDate={new Date(2023, 10, 1)}
										fontSize="sm"
									/>
								</VStack>
							</Box>
						</HStack>
					</form>
				</Box>
			</HStack>
		</Box>
	);
}

export default SingleSession;

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
	const { id } = ctx.query;
	try {
		// const data = (await _dataAccess.get(`/api/Admin/clean/requests/get/${id}`))
		// 	.data;

		const list = (await _dataAccess.get(`/api/Admin/clean/requests/list`)).data;
		return {
			props: {
				list,
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
