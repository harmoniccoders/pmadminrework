import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { Transaction } from "Services";
import Naira from "../Utilities/Naira";

export interface items {
  isOpen: boolean;
  onClose: any;
  data: Transaction | undefined;
}
function SingleTransaction({ isOpen, onClose, data }: items) {
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
        w={["88%", "30%"]}
        overflow="hidden"
        maxH="100vh"
        maxW="100%"
        mt="1rem"
        mb="0"
      >
        <ModalHeader>
          <Text
            color="black"
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            {"Transaction Details"}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="80vh" overflowY="hidden" px={5}>
            <VStack alignItems="flex-start" spacing={6}>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Transaction Name
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  Payment for {data?.property?.name}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Paid by
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {data?.user?.firstName} {data?.user?.lastName}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Amount
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {Naira(data?.amount || "0")}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Date
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {moment(data?.dateCreated).format("MMM DD, YYYY")}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Time
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {moment(data?.dateCreated).format("LT")}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Recepient
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {"Property Mataaz"}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Transaction Status
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {data?.status?.name}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Transaction Reference ID
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  {data?.transactionReference}
                </Text>
              </Box>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default SingleTransaction;
