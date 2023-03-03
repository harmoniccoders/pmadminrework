import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { MdClose } from "react-icons/md";
import { ReportView } from "Services";
import { ReportLabel } from "../Utilities/ReportLabel";

function ViewReport({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: any;
  data: ReportView | undefined;
}) {
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
        maxWidth="80%"
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
            Viewing complaints on {data?.property?.name}
          </Text>
          <Icon as={MdClose} onClick={onClose} cursor="pointer" />
        </ModalHeader>
        <ModalBody>
          <VStack
            maxH="80vh"
            overflowY="auto"
            px={5}
            align="flex-start"
            spacing="1rem"
          >
            <ReportLabel
              label="Reported By"
              value={`${data?.user?.firstName} ${data?.user?.lastName}`}
            />
            <ReportLabel label="Reporter Email" value={data?.email} />
            <ReportLabel
              label="Date Submitted"
              value={moment(data?.dateCreated).format("MMM DD, YYYY")}
            />
            <ReportLabel label="Description" value={data?.description} />

            <Button onClick={onClose} mx="auto !important" w="60%" minW="0">
              Close
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ViewReport;
