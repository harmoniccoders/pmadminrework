import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginModel } from "types/AppTypes";
import { PrimaryInput } from "../Utilities/PrimaryInput";
import { PropertyModel, PropertyView } from "Services";
import { Parameters } from "openapi-client-axios";
import { useToasts } from "react-toast-notifications";
import { useOperationMethod } from "react-openapi-client";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose } from "react-icons/md";

function RejectProperty({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: any;
  data: PropertyView;
}) {
  const [rejectProperty, { loading, data: isData, error }] = useOperationMethod(
    "Adminpropertyreject{propertyId}{reason}"
  );
  const { addToast } = useToasts();
  const router = useRouter();
  const [reason, setReason] = useState<string>("");

  const Reject = async () => {
    const params: Parameters = {
      propertyId: data.id as number,
      reason: reason,
    };

    try {
      const result = await (await rejectProperty(params)).data;
      if (result.status) {
        onClose();
        addToast(result.message, {
          appearance: "success",
          autoDismiss: true,
        });
        router.reload();
        return;
      }
      onClose();
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
        borderRadius="0"
        w={["88%", "48%"]}
        overflow="hidden"
        maxH="100vh"
        // maxWidth="80%"
        mt="0"
        mb="0"
        boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
      >
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            color="black"
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            Reject Property
          </Text>
          <Icon as={MdClose} onClick={onClose} cursor="pointer" />
        </ModalHeader>
        <ModalBody>
          <VStack maxH="80vh" overflowY="auto" px={5}>
            <VStack spacing="2rem" alignItems="flex-start" w="full">
              <FormControl>
                <FormLabel
                  textTransform="capitalize"
                  pos="relative"
                  top={5}
                  left={4}
                  width="fit-content"
                  zIndex={3}
                  bg="brand.200"
                >
                  Rejection Reason
                </FormLabel>
                <Textarea
                  placeholder="Provide a rejection reason"
                  variant="outline"
                  defaultValue=""
                  borderRadius="0"
                  onChange={(e) => setReason(e.target.value)}
                />
              </FormControl>
              <Button
                w="full"
                mt="2rem"
                height="3rem"
                onClick={Reject}
                isLoading={loading}
                disabled={reason.length < 15 ? true : false}
              >
                Reject
              </Button>
            </VStack>
            {reason.length < 15 && (
              <Text color="red" fontSize=".9rem" textAlign="center">
                Reject reason should be atleast 15 characters <br />
                {15 - reason.length} characters left
              </Text>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default RejectProperty;
