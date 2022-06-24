import React, { useState } from "react";
import {
	Box,
	Circle,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { BsSearch } from "react-icons/bs";
import Tab from "lib/components/Utilities/Tab";
import { useRouter } from "next/router";
import Profile from "lib/components/Utils/UsersTab/Profile";
import Link from "next/link";
import { UserView } from "../../../Services";
import { DataAccess } from "lib/Utils/Api";
import Pagination from "lib/components/Utilities/Pagination";

export default function Index({ data }: { data: any }) {
	const [currentTab, setCurrentTab] = useState("profile");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/users/${userProfile.id}/${tabname}`);
	};

	const result = data.value;
	const userProfile: UserView = result[0];
	return (
		<>
			<HStack spacing="1rem" h="auto" alignItems="flex-start">
				<Box w="20%">
					<Box bgColor="white" h="87vh">
						<InputGroup>
							<InputLeftElement
								h="42px"
								w="42px"
								children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
							/>
							<Input
								placeholder="Search"
								height="2.5rem"
								bgColor="white"
								border="0"
								boxShadow="0"
								fontSize="14px"
								fontWeight="medium"
								padding="0 3rem"
								_focus={{
									borderColor: "unset",
									border: "0",
								}}
							/>
						</InputGroup>
						{result.map((user: UserView, i: number) => (
							<Link key={i} href={`/admin/users/${user.id}/profile`}>
								<Flex
									borderTop="1px solid rgba(36,68,115,0.3)"
									h="40px"
									role="group"
									cursor="pointer"
									alignItems="center"
									transition="all .2s ease"
									_hover={{ bgColor: "brand.100" }}
									bgColor={userProfile.id == user.id ? "brand.100" : "unset"}
								>
									<Text
										color={userProfile.id == user.id ? "white" : "black"}
										fontSize="14px"
										textTransform="capitalize"
										fontWeight="600"
										pl="1.2rem"
										_groupHover={{ color: "white" }}
									>
										{user.fullName}
									</Text>
								</Flex>
							</Link>
						))}
					</Box>
					<Box mt=".7rem">
						<Pagination data={data} />
					</Box>
				</Box>
				<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
					<Flex alignItems="center" fontWeight="bold">
						<Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
							{`${(userProfile?.firstName as unknown as string)[0]}${
								(userProfile?.lastName as unknown as string)[0]
							}`}
						</Circle>
						<Box>
							<Text fontSize="1.5rem">{userProfile.fullName}</Text>
						</Box>
					</Flex>
					<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
						<Box onClick={() => navigateTabs("profile")}>
							<Tab tabname="profile" currentTab={currentTab} />
						</Box>
						<Box onClick={() => navigateTabs("listings")}>
							<Tab tabname="listings" currentTab={currentTab} />
						</Box>
						<Box onClick={() => navigateTabs("settings")}>
							<Tab tabname="settings" currentTab={currentTab} />
						</Box>
					</Flex>
					<Profile user={userProfile} />
				</Box>
			</HStack>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const bearer = `Bearer ${ctx.req.cookies.token}`;
	const _dataAccess = new DataAccess(bearer);
	let { url, search } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=14&offset=0&";
	}
	url = url ?? "limit=14&offset=0&";

	if (search) {
		url = `${url}search=${search}`;
	}
	try {
		const data = (await _dataAccess.get(`/api/User/list?${url}`)).data;

		return {
			props: {
				data: data,
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
