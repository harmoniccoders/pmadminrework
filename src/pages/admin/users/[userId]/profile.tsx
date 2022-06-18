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
import { AdminService, UserService, UserView } from "services";
import { UserViewPagedCollectionStandardResponse } from "types/api";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import Tab from "lib/components/Utilities/Tab";
import Profile from "lib/components/Utils/UsersTab/Profile";


export default function UserProfile({
  data,
  userId
}:{
  data: UserView[],
  userId: number;
}) {
  const [currentTab, setCurrentTab] = useState("profile");
  const router = useRouter();
  const userProfile = data.filter(singleUser => singleUser.id == userId)
  console.log(userProfile[0])
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/users/${userProfile[0].id}/${tabname}`);
  };

  console.log(data)
  return (
    <>
      <HStack spacing="1rem" h="auto" alignItems="flex-start">
        <Box w="20%" bgColor="white" minH="90vh" h="100%">
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
          {
            data.map((user, i) => (
          <Link key={i} href={`/admin/users/${user.id}/profile`}>
          <Flex
            borderTop="1px solid rgba(36,68,115,0.3)"
            h="40px"
            role="group"
            cursor="pointer"
            alignItems="center"
            transition="all .2s ease"
            bgColor={user.id == userId ? "black" : "unset"}
            _hover={{ bgColor: "black" }}
          >
            <Text
              
              fontSize="14px"
              fontWeight="bold"
              pl="1.2rem"
              color={user.id == userId ? "white" : "black"}
              _groupHover={{ color: "white" }}
            >
              {user.fullName}
            </Text>
          </Flex>
          </Link>
            ))
          }
        </Box>
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <Flex alignItems="center" fontWeight="bold">
            <Circle bgColor="black" color="white" size="3rem" mr="1rem">
            {`${userProfile[0].firstName[0]}${userProfile[0].lastName[0]}`}
            </Circle>
            <Box>
              <Text fontSize="1.5rem">{userProfile[0].fullName}</Text>
            </Box>
          </Flex>
          <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
            <Box onClick={() => navigateTabs("profile")}>
              <Tab tabname="profile" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("transactions")}>
              <Tab tabname="transactions" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("savings")}>
              <Tab tabname="savings" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("loans")}>
              <Tab tabname="loans" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("investments")}>
              <Tab tabname="investments" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("payments")}>
              <Tab tabname="payments" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("SLIPCARD")}>
              <Tab tabname="SLIPCARD" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("security")}>
              <Tab tabname="security" currentTab={currentTab} />
            </Box>
          </Flex>
          <Profile user={userProfile[0]}/>
        </Box>
      </HStack>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {userId} = ctx.query
  console.log(userId)
  try {
    const data: UserViewPagedCollectionStandardResponse = await UserService.listUsers();
    console.log(data);
    return {
      props: {
        userId,
        data: data.data?.value,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
