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
import UserLists from "lib/components/Utils/UsersTab/UserLists";

export default function UserListings({
  data,
  userId,
  enquires,
  requests,
}: {
  data: any;
  userId: number;
  enquires: any;
  requests: any;
}) {
  const [currentTab, setCurrentTab] = useState("listings");
  const router = useRouter();

  const result = data.value;
  const UserListings: any = result.filter(
    (singleUser: any) => singleUser.id == userId
  )[0];
  console.log({ UserListings });

  // console.log(userProfile[0]);
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/users/${UserListings.id}/${tabname}`);
  };
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
              <Link key={i} href={`/admin/users/${user.id}/listings`}>
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
              <Pagination data={data} />
            </Box>
          </Box>
        </Box>
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <Flex alignItems="center" fontWeight="bold">
            <Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
              {`${UserListings.firstName[0]}${UserListings.lastName[0]}`}
            </Circle>
            <Box>
              <Text fontSize="1.5rem">{UserListings.fullName}</Text>
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
          <UserLists
            user={UserListings}
            enquires={enquires}
            requests={requests}
          />
        </Box>
      </HStack>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
  const _dataAccess = new DataAccess(bearer);
  let { url, search, userId } = ctx.query;
  if (url == "" || undefined || null) {
    url = "limit=15&offset=0&";
  }
  url = url ?? "limit=15&offset=0&";

  if (search) {
    url = `${url}search=${search}`;
  }
  try {
    const data = (await _dataAccess.get(`/api/User/list?${url}`)).data;
    const enquires = (
      await _dataAccess.get(`/api/Admin/enquiries/user/get/${userId}`)
    ).data;
    const requests = (await _dataAccess.get(`/api/Admin/list/user/${userId}`))
      .data;

    return {
      props: {
        data,
        userId,
        enquires,
        requests,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        enquires: [],
        requests: [],
      },
    };
  }
};
