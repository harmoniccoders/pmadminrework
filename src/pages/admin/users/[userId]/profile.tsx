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
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { DataAccess } from "lib/Utils/Api";
import { UserView } from "Services";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import Tab from "lib/components/Utilities/Tab";
import Profile from "lib/components/Utils/UsersTab/Profile";
import Pagination from "lib/components/Utilities/Pagination";
import SearchComponent from "lib/components/Utilities/SearchComponent";

export default function UserProfile({
	data,
	userId,
	allUsers,
	url,
}: {
	data: UserView;
	userId: number;
	allUsers: any;
	url: string;
}) {
	const [currentTab, setCurrentTab] = useState("profile");
	const router = useRouter();
	const result = allUsers.value;
	const userProfile = data;
	// console.log(allUsers.next);
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/users/${userProfile.id}/${tabname}`);
	};
	return (
		<>
			<HStack spacing="1rem" h="auto" alignItems="flex-start">
				<Box w="20%">
					<Box bgColor="white" h="87vh">
						<SearchComponent
							border={false}
							userId={allUsers.next == undefined ? 1 : 0}
						/>
						{result.map((user: UserView, i: number) => (
							<Link
								key={i}
								href={`/admin/users/${user.id}/profile${
									url ? `?url=${url}` : ""
								}`}
							>
								<Flex
									borderTop="1px solid rgba(36,68,115,0.3)"
									h="40px"
									role="group"
									cursor="pointer"
									alignItems="center"
									transition="all .2s ease"
									_hover={{ bgColor: "brand.100" }}
									bgColor={user.id == userId ? "brand.100" : "unset"}
								>
									<Text
										color={user.id == userId ? "white" : "black"}
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
						<Box mt=".7rem">
							<Pagination
								data={allUsers}
								userId={allUsers.next == undefined ? 1 : 0}
							/>
						</Box>
					</Box>
				</Box>
				<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
					<Flex alignItems="center" fontWeight="bold">
						<Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
							{`${userProfile.firstName?.charAt(
								0
							)}${userProfile.lastName?.charAt(0)}`}
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
	const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
	const _dataAccess = new DataAccess(bearer);
	let { url, search, userId, offset,page } = ctx.query;
	if (!url) {
		url = "";
	}
	if (url) {
		url = `${url}&offset=${offset}`;
	}
	if (search) {
		url = `${url}&search=${search}`;
	}
	if(page){
		url = `${url}&page=${page}`;
	}
	console.log({ url, search, userId, offset });
	const data = (await _dataAccess.get(`/api/Admin/user/${userId}`)).data;
	// console.log({ data });

	if ((data && data.id != userId) || userId == "0") {
		if (url) {
			return {
				redirect: {
					permanent: false,
					destination: `/admin/users?url=${url}`,
				},
			};
		}
	}

	try {
		const allUsers = (await _dataAccess.get(`/api/User/list?${url}`)).data;

		return {
			props: {
				data,
				allUsers,
				userId,
				url,
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
