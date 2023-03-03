import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import AddComplainCategory from "lib/components/Modals/AddComplaintCategory";
import SingleComplaintModal from "lib/components/Modals/SingleComplaintModal";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { useState } from "react";
import { ComplaintsView } from "Services";
const moment = require("moment");

export default function ComplaintsLists({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<ComplaintsView>();
  const openModal = (data: any) => {
    setClicked(data);
    onOpen();
  };
  return (
    <>
      <Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
        <TableContainer h="500px" overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <TableHead title="Category" />
                <TableHead title="Sub category" />
                <TableHead title="Comment" />
                <TableHead title="Status" />
              </Tr>
            </Thead>

            <Tbody>
              {data?.value?.map((item: any) => {
                return (
                  <Tr onClick={() => openModal(item)}>
                    <TableData name={item.complaintsCategory} />
                    <TableData name={item.complaintsSubCategory} />
                    <TableData name={item.comment} />
                    <TableData name={item.status.toLowerCase()} />
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <SingleComplaintModal
          isOpen={isOpen}
          onClose={onClose}
          data={clicked}
        />
      </Box>
    </>
  );
}
