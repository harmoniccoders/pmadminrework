import {
  Box,
  Flex,
  HStack,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import {
  TableData,
  TableHead,
  TableStatus,
} from "lib/components/Utilities/Tables";
import { useState } from "react";
import { Transaction } from "Services";
import Naira from "./Naira";
import SearchComponent from "./SearchComponent";
import TableCheckbox from "./TableCheckbox";
import TableNoContentWrapper from "./TableNoContentWrapper";
const moment = require("moment");
import { CSVLink } from "react-csv";
import SingleTransaction from "../Modals/SingleTransaction";

function AdminTransaction({ data }: any) {
  const result = data?.value;
  console.log({ result });
  const [clicked, setClicked] = useState<Transaction>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (data: Transaction) => {
    setClicked(data);
    onOpen();
  };

  const thead = [
    {
      label: "User",
      key: "user.firstName",
    },
    {
      label: "Amount",
      key: "amount",
    },
    // {
    //   label: "Type",
    //   key: "property.isForSale",
    // },
    {
      label: "Services",
      key: "property.isForSale",
    },
    {
      label: "Property",
      key: "title",
    },
    {
      label: "Provider",
      key: "paymentLog.paymentType",
    },
    {
      label: "Channel",
      key: "channel",
    },
    {
      label: "Time",
      key: "dateCreated",
    },
    {
      label: "Status",
      key: "status.name",
    },
  ];

  const [selectedId, setSelectedId] = useState<any>([]);
  const toggleSelected = (item: any, all?: boolean) => {
    if (all) {
      if (selectedId?.length === result?.length) {
        setSelectedId([]);
        return;
      }
      const response: Transaction[] = [];
      result?.forEach((x: Transaction) => response.push(x as Transaction));
      console.log({ response });
      setSelectedId([...response]);
      return;
    }
    const existingValue = selectedId.find((e: any) => e.id === item.id);
    if (existingValue) {
      const newArray = selectedId.filter((x: any) => x.id !== item.id);
      setSelectedId(newArray);
      return;
    }
    setSelectedId([...selectedId, item]);
  };

  const csvReport = {
    data: selectedId,
    headers: thead,
    filename: "PMTxnReport.csv",
  };

  return (
    <>
      <HStack
        bgColor="white"
        pt="1rem"
        justifyContent="space-between"
        align="center"
        spacing={6}
        marginTop="1rem"
        cursor="pointer"
        px="1rem"
      >
        <SearchComponent />
        <HStack>
          <CSVLink {...csvReport}>
            <Flex
              w="142px"
              h="36px"
              justify="space-between"
              alignItems="center"
              px="1.1rem"
              border="2px solid black"
              borderRadius="3px"
            >
              <Text color="black" fontSize="14px" fontWeight="600">
                Export: {selectedId.length !== 0 ? selectedId.length : ""}
              </Text>
              <i className="far fa-file-export" style={{ color: "black" }}></i>
            </Flex>
          </CSVLink>

          <Select
            placeholder="5 aug 2020 - 7 aug 2020"
            borderRadius="3px"
            w="217px"
            color="rgba(0, 0, 0, 1)"
            fontSize="12px"
            fontWeight="500"
            border="2px solid black !important"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            w="99px"
            bgColor="white"
            borderRadius="3px"
            color="black"
            placeholder="Filter"
            fontSize="12px"
            border="2px solid black !important"
            fontWeight="500"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>
      <Box
        w="full"
        minH="500px"
        bgColor="white"
        // boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
        borderRadius="5"
        p=" 1rem 0 1.5rem"
      >
        <TableContainer overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <th>
                  <TableCheckbox
                    checked={
                      result?.length !== 0 &&
                      result?.length == selectedId?.length
                    }
                    onChange={() => toggleSelected("", true)}
                    // label="Select All"
                  />
                </th>
                {thead.map((x, i) => (
                  <TableHead title={x.label} />
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {result?.length === 0 ? (
                <TableNoContentWrapper
                  elements={
                    <Text>
                      There's currently no data available. Check back later
                    </Text>
                  }
                />
              ) : (
                <>
                  {result?.map((item: Transaction) => {
                    return (
                      <Tr onClick={() => openModal(item)} key={item.id}>
                        <td>
                          <TableCheckbox
                            checked={
                              selectedId.find((e: any) => e.id === item.id) ||
                              ""
                            }
                            onChange={(e: any) => toggleSelected(item)}
                          />
                        </td>
                        <TableData
                          name={`${item.user?.firstName as string} ${
                            item.user?.lastName as string
                          }`}
                        />
                        <TableData
                          name={Naira(item?.amount as unknown as number)}
                        />
                        {/* <TableData
                          name={
                            item.property?.isForSale
                              ? "Buy Property"
                              : item.property?.isForRent
                              ? "Pay Rent"
                              : item.installment
                              ? "Repay Loan"
                              : "Other actions"
                          }
                        /> */}
                        <TableData
                          name={
                            item.property?.isForSale
                              ? "Buy"
                              : item.property?.isForRent
                              ? "Rent"
                              : item.installment
                              ? "RentRelief"
                              : "Other actions"
                          }
                        />
                        <TableData name={item?.title} />
                        <TableData name="Flutterwave" />
                        <TableData name={"Card"} />
                        <TableData
                          name={`${moment(item.dateCreated).format(
                            "DD/MM/YY"
                          )} - ${moment(item.dateCreated).format("LT")}`}
                        />
                        <TableStatus
                          name={(item.status?.name as string).toLowerCase()}
                        />
                      </Tr>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Box mt="1rem">
          <Pagination data={data} />
        </Box>
        <SingleTransaction isOpen={isOpen} onClose={onClose} data={clicked} />
      </Box>
    </>
  );
}

export default AdminTransaction;
