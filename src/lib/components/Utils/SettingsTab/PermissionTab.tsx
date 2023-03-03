import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import AddNewAdmin from "lib/components/Modals/AddNewAdmin";
import Tab from "lib/components/Utilities/Tab";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import AdminProfile from "./AdminProfile";
import { useRouter } from "next/router";
import { UserView } from "Services";
import SearchComponent from "lib/components/Utilities/SearchComponent";
import Link from "next/link";
import Pagination from "lib/components/Utilities/Pagination";
import Permission from "./Permission";

function PermissionTab({
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
  const [currentTab, setCurrentTab] = useState("permissions");
  const router = useRouter();

  const navigateTabs = (tabname: string) => {
    router.push(`/admin/admins/${data.id}/${tabname}`);
  };
  const [successOpen, setsuccessOpen] = useState(false);
  const openModal = () => {
    setsuccessOpen(true);
  };
  const closeModal = () => {
    setsuccessOpen(false);
  };
  return (
    <HStack spacing="1rem" h="auto" alignItems="flex-start">
      <Box w="20%" bgColor="white" minH="90vh" h="100%">
        <SearchComponent
          border={false}
          userId={allUsers.next == undefined ? 1 : 0}
        />
        {allUsers?.value.map((user: UserView, i: number) => (
          <Link
            key={i}
            href={`/admin/admins/${user.id}/profile${url ? `?url=${url}` : ""}`}
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
      <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
        <Flex alignItems="center" fontWeight="bold" justify="space-between">
          <Box>
            <Text fontSize="1.5rem">{data?.fullName}</Text>
          </Box>
          <Button
            bg="brand.100"
            onClick={openModal}
            width="fit-content"
            px="2rem"
            height="3rem"
            color="#fff"
            borderRadius="8px"
          >
            + &nbsp; Add New Admin
          </Button>
        </Flex>
        <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
          <Box onClick={() => navigateTabs("profile")}>
            <Tab tabname="profile" currentTab={currentTab} />
          </Box>
          <Box onClick={() => navigateTabs("permissions")}>
            <Tab tabname="permissions" currentTab={currentTab} />
          </Box>
        </Flex>
        <Permission />
      </Box>
      <AddNewAdmin isOpen={successOpen} onClose={closeModal} />
    </HStack>
  );
}

export default PermissionTab;
