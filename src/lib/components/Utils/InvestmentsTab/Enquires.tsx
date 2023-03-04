import {
  Box,
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
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import SearchComponent from "lib/components/Utilities/SearchComponent";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { UserEnquiryView } from "Services";
const moment = require("moment");

function Enquires({ result }: any) {
  const data = result.value;

  return (
    <>
      <HStack
        bgColor="white"
        pt="1.5rem"
        justifyContent="space-between"
        align="center"
        spacing={6}
        marginTop="0rem"
        cursor="pointer"
        px="1rem"
      >
        {/* <SearchComponent /> */}
      </HStack>
      <Box
        w="full"
        minH="500px"
        bgColor="white"
        // boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
        borderRadius="5"
        p=" 1rem 0"
      >
        <TableContainer overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <TableHead title="Property Name" />
                <TableHead title="User" />
                <TableHead title="State" />
                <TableHead title="Locality" />
                <TableHead title="Area" />
                <TableHead title="Inspection" />
                <TableHead title="Status" />
              </Tr>
            </Thead>

            <Tbody>
              {data?.map((item: any) => {
                return (
                  <Link
                    href={"/admin/listings/enquires/" + item.id}
                    key={item.id}
                  >
                    <Tr>
                      {/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
                      <TableData name={item.propertyName} />
                      <TableData name={item.fullName} />
                      <TableData name={item.state} />
                      <TableData name={item.lga} />
                      <TableData name={item.area} />
                      <TableData
                        name={
                          item.singleInspection !== null
                            ? moment(
                                item.singleInspection?.inspectionTime.time
                              ).format("DD/MM/YY - LT")
                            : "-"
                        }
                      />
                      <TableData
                        name={item.active == true ? "Active" : "Closed"}
                      />
                    </Tr>
                  </Link>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box mt="1rem">
          <Pagination data={result} />
        </Box>
      </Box>
    </>
  );
}

export default Enquires;
