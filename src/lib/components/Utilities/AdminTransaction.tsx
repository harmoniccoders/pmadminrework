import {
  Box,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import { useRouter } from "next/router";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsFilter } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

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

  const router = useRouter();
  const filterStatus = (value: any) => {
    router.push({
      query: {
        Status: value,
      },
    });
  };

  const [fromDate, setFromDate] = useState<any>(
    new DateObject().subtract(4, "days")
  );
  const [toDate, setToDate] = useState<any>(new DateObject().add(4, "days"));

  const [date, setDate] = useState<any>([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days"),
  ]);

  console.log("date[0].year");

  function filterByDate() {
    router.push({
      query: {
        StartDate: `${date[0].year}/${date[0].month}/${date[0].day}`,
        EndDate: `${date[1].year}/${date[1].month}/${date[1].day}`,
      },
    });
  }
  function clearfilter() {
    router.push({ query: { StartDate: "", EndDate: "" } });
  }

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
          <Flex align="center">
            {/* <HStack spacing={["0", ".5rem"]}>
              <HStack>
                <Text
                  mb="0"
                  fontSize=".8rem"
                  fontWeight="600"
                  display={["none", "block"]}
                >
                  From
                </Text>

                <Box marginInlineStart={["0 !important", ".5rem !important"]}>
                  <DatePicker
                    value={fromDate}
                    onChange={setFromDate}
                    format="MMM DD, YYYY"
                    render={(value: any, openCalendar: any) => {
                      return (
                        <HStack
                          w="fit-content"
                          px="1rem"
                          h="2.5rem"
                          justifyContent="center"
                          alignItems="center"
                          border="2px solid"
                          borderColor="black"
                          color="black"
                          boxShadow="sm"
                          borderRadius="3px"
                          cursor="pointer"
                          fontSize=".9rem"
                          onClick={(value) => openCalendar(value)}
                        >
                          <Text mb="0" whiteSpace="nowrap">
                            {value}
                          </Text>
                          <Icon as={FaRegCalendarAlt} />
                        </HStack>
                      );
                    }}
                  />
                </Box>
              </HStack>
              <HStack>
                <Text
                  mb="0"
                  fontSize=".8rem"
                  fontWeight="600"
                  display={["none", "block"]}
                >
                  To
                </Text>
                <Text
                  mb="0"
                  fontSize=".8rem"
                  fontWeight="600"
                  display={["block", "none"]}
                >
                  -
                </Text>

                <DatePicker
                  value={toDate}
                  onChange={setToDate}
                  format="MMM DD, YYYY"
                  render={(value: any, openCalendar: any) => {
                    return (
                      <HStack
                        w="fit-content"
                        px="1rem"
                        h="2.5rem"
                        justifyContent="center"
                        alignItems="center"
                        border="2px solid"
                        borderColor="black"
                        color="black"
                        boxShadow="sm"
                        borderRadius="3px"
                        cursor="pointer"
                        fontSize=".9rem"
                        onClick={openCalendar}
                      >
                        <Text mb="0" whiteSpace="nowrap">
                          {value}
                        </Text>
                        <Icon as={FaRegCalendarAlt} />
                      </HStack>
                    );
                  }}
                />
              </HStack>
            </HStack> */}
            <DatePicker
              value={date}
              onChange={setDate}
              range
              format="MMM DD, YYYY"
              render={(stringDates: any, openCalendar: any) => {
                const from = stringDates[0] || "";
                const to = stringDates[1] || "";
                const value = from && to ? from + " - " + to : from;
                return (
                  <HStack
                    w="fit-content"
                    px="1rem"
                    h="2.5rem"
                    justifyContent="center"
                    alignItems="center"
                    border="2px solid"
                    borderColor="black"
                    color="black"
                    boxShadow="sm"
                    borderRadius="3px"
                    cursor="pointer"
                    fontSize=".9rem"
                    onClick={openCalendar}
                  >
                    <Text mb="0" whiteSpace="nowrap">
                      {value}
                    </Text>
                    <Icon as={FaRegCalendarAlt} />
                  </HStack>
                );
              }}
            />

            {/* <Tooltip hasArrow label="Click to apply filter"> */}
            <Menu>
              <MenuButton
                ml=".5rem"
                // bgColor="red"
              >
                <Icon as={BsFilter} />
              </MenuButton>
              <MenuList fontSize=".8rem">
                <MenuItem onClick={filterByDate}>
                  <Text fontWeight="500" color="brand.100" mb="0">
                    Apply filter
                  </Text>
                </MenuItem>
                <MenuItem onClick={clearfilter}>
                  <Text fontWeight="500" color="brand.100" mb="0">
                    Clear filter
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
            {/* </Tooltip> */}
          </Flex>
          {/* <Select
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
          </Select> */}
          <Select
            w="99px"
            bgColor="white"
            borderRadius="3px"
            color="black"
            fontSize="12px"
            border="2px solid black !important"
            fontWeight="500"
            onChange={(e) => filterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
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
