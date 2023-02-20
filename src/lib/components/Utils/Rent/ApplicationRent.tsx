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
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function ApplicationRent({ result }: any) {
  const data = result.value;
  console.log({ data });
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
      ></HStack>
      <Box
        w="full"
        minH="500px"
        bgColor="white"
        // boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
        borderRadius="5"
        p=" 1rem 0"
      >
        <TableContainer h="500px" overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <TableHead title="Property" />
                {/* <TableHead title="Landlord" /> */}
                <TableHead title="Applicant" />
                <TableHead title="Annual Rent" />
                <TableHead title="Date Applied" />
                <TableHead title="Status" />
              </Tr>
            </Thead>

            <Tbody>
              {data.map((item: any) => {
                return (
                  <Link
                    href={"/admin/rent/applications/" + item.id}
                    key={item.propertyId}
                  >
                    <Tr>
                      <TableData name={item.property.name} />
                      {/* <TableData
												name={item.createdByUser?.fullName || "PropertyMataaz"}
											/> */}
                      <TableData
                        name={`${item.user.firstName} ${item.user.lastName}`}
                      />
                      <TableData name={Naira(item.property.price)} />
                      <TableData
                        name={moment(item.dateCreated).format("DD/MM/YY")}
                      />
                      <TableData
                        name={(item.status?.name as string).toLowerCase()}
                      />
                    </Tr>
                  </Link>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Pagination data={result} />
      </Box>
    </>
  );
}

export default ApplicationRent;
