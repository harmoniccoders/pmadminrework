import { Box, Flex, VStack, Text, Switch, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { Parameters } from "openapi-client-axios";
import { UserView } from "Services";

function AdminProfile({ user }: { user: UserView }) {
  const { addToast } = useToasts();
  const router = useRouter();

  const [deleteadmin, { loading, data: dData, error: eError }] =
    useOperationMethod("Admindelete{email}");

  const DeleteAdmin = async (selected: any) => {
    const params: Parameters = {
      email: selected,
    };

    try {
      const result = await (await deleteadmin(params)).data;

      if (result.status) {
        addToast("Succesful", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push('/admin/admins');
        return;
      }
      addToast(result.message, {
        appearance: "error",
        autoDismiss: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justify="space-between" mt="2rem" pr="5rem">
      <VStack spacing="1rem" alignItems="flex-start">
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            First Name
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.firstName}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Surname
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.lastName}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Email
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.email}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Mobile
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.phoneNumber}
          </Text>
        </Box>
        <Box w="full" ml="auto">
          <Button
            as="button"
            w="full"
            h="2.3rem"
            borderRadius="3px"
            border="2px solid rgba(25,25,25,1)"
            fontSize="14.5px"
            fontWeight="bold"
            color="black"
            bgColor="transparent"
            isLoading={loading}
            onClick={() => DeleteAdmin(user?.email)}
          >
            Delete Admin
          </Button>
        </Box>
      </VStack>
      <VStack spacing="1rem" alignItems="flex-start">
        <Flex>
          <Text
            fontSize="12px"
            fontWeight="medium"
            color="rgba(15,15,15,.5)"
            mr="0.5rem"
          >
            Account Active
          </Text>
          <Switch colorScheme="brand" defaultChecked />
        </Flex>
      </VStack>
    </Flex>
  );
}

export default AdminProfile;
