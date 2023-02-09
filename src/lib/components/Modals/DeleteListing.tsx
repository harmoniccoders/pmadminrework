import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { Parameters } from "openapi-client-axios";
import { FaTrash } from "react-icons/fa";

function DeleteListing({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: any;
  data: any;
}) {
  const { addToast } = useToasts();
  const router = useRouter();

  const [deleteProperty, { loading, data: dData, error: eError }] =
    useOperationMethod("Propertydelete{id}");

  const DeleteProperty = async () => {
    const params: Parameters = {
      id: data.id as number,
    };

    try {
      const result = await (await deleteProperty(params)).data;

      if (result.status) {
        addToast("Property Deleted Succesfully", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push("/admin/listings/listings");
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
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(10deg)"
      />
      <ModalContent
        py={5}
        borderRadius="0px"
        w={["88%", "50%"]}
        overflow="hidden"
        maxH="100vh"
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
            Delete listing
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="80vh" overflowY="auto" px={5}>
            <VStack spacing="0rem" alignItems="center" w="full">
              {/* <FaTrash fontSize="3rem" /> */}
              <Text fontSize="1.1rem" fontWeight="bold">
                Are you sure you want to delete {data.name}
              </Text>
              <Text color="red" fontSize=".8rem">
                Please note, action cannot be reversed
              </Text>
            </VStack>
            <HStack px=".8rem" spacing={4} w="full" mt="2rem">
              <Button
                variant="solid"
                height="40px"
                width="full"
                bgColor="black"
                onClick={onClose}
              >
                No
              </Button>
              <Button
                variant="solid"
                height="40px"
                width="full"
                bgColor="red"
                isLoading={loading}
                onClick={() => DeleteProperty()}
              >
                Yes
              </Button>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default DeleteListing;
