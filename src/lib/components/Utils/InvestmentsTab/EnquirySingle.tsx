import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import ViewApplication from "lib/components/Modals/ViewApplication";
import ViewListings from "lib/components/Modals/ViewListings";
import NameTag from "lib/components/NameTag";
import Icons from "lib/components/Utilities/Icons";
import { InspectionDate } from "lib/components/Utilities/InspectionDate";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { DataAccess } from "lib/Utils/Api";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Parameters } from "openapi-client-axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  InspectionDateModel,
  InspectionDateView,
  InspectionTimeModel,
  InspectionTimeView,
  InspectionView,
  PropertyModel,
  PropertyView,
  UserEnquiryView,
} from "Services";
import { Widget } from "@uploadcare/react-widget";

const moment = require("moment");

interface Eprops {
  data: any;
  property: any;
  application: any;
  user: any;
  inspection: any;
}
const schema = yup.object().shape({
  date: yup.string().required(),
});
function EnquirySingle({
  data,
  property,
  application,
  user,
  inspection,
}: Eprops) {
  console.log({ application });

  const widgetApi = useRef<any>();

  const [uploadDoc, { loading: isLoading, data: isDatas, error: isError }] =
    useOperationMethod("Propertyupdate");
  async function uploadDocument(data: PropertyModel, documents: string) {
    data.documentUrl = documents;
    try {
      const result = await (await uploadDoc(undefined, data)).data;

      console.log({ result });
      if (result.status) {
        addToast("Success", {
          appearance: "success",
          autoDismiss: true,
        });
        router.reload();
        return;
      }
      addToast(result.message, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } catch (err: any) {
      addToast(err?.body?.message || err.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }
  const initializeDocuments = async (info: any) => {
    uploadDocument(property, info.cdnUrl);
  };

  console.log({ data, property });

  // console.log({ data });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<InspectionDateModel>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      propertyId: data.propertyId,
    },
  });

  const singleUser = application?.value?.filter(
    (x: any) => x.user.id == data.userId
  )[0];

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToast } = useToasts();

  const [addDate, { loading, data: isData, error }] = useOperationMethod(
    "Propertyinspectiondatescreate"
  );

  const onSubmit = async (data: InspectionDateModel) => {
    data.date = new Date(data.date as unknown as Date).toLocaleDateString();
    try {
      const result = await (await addDate(undefined, data)).data;

      console.log({ result });
      if (result.status) {
        addToast("Success", {
          appearance: "success",
          autoDismiss: true,
        });
        router.reload();
        return;
      }
      addToast(result.message, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } catch (err) {}
  };

  function ListItem({ d }: any) {
    const [deleteInsp, { loading: isLoading, data: dataL, error: errorL }] =
      useOperationMethod("Propertyinspectiondatesdelete{id}");
    async function del() {
      const DeleteInspection = async (date: any) => {
        const params: Parameters = {
          id: date,
        };
        try {
          const result = await (await deleteInsp(params)).data;
          if (result.status) {
            addToast("Deleted", {
              appearance: "success",
              autoDismiss: true,
            });
            router.reload();
            return;
          }
          addToast(result.message, {
            appearance: "error",
            autoDismiss: true,
          });
          return;
        } catch (err) {}
      };
      DeleteInspection(d);
    }
    return (
      <Button
        cursor="pointer"
        w="2rem"
        bgColor="transparent"
        maxW="unset"
        type="submit"
        isLoading={isLoading}
        color="black"
        px="0"
        h="2rem"
        onClick={del}
        _hover={{
          bgColor: "transparent",
          color: "black",
        }}
      >
        <Icons iconClass="fa-trash-alt" />
      </Button>
    );
  }

  function TimeItem({ d, t }: any) {
    const [addTime, { loading: isLoaded }] = useOperationMethod(
      "Propertyinspectiontimecreate"
    );
    async function timeAdd() {
      const AddTime = async (dates: any) => {
        const timeData = {
          availableTime: (startDate as unknown as Date).toLocaleString(),
          inspectionDateId: dates,
        };
        console.log({ timeData });

        try {
          const result = await (await addTime(undefined, timeData)).data;
          console.log({ result });

          if (result.status) {
            addToast("New Time Slot Added", {
              appearance: "success",
              autoDismiss: true,
            });
            router.reload();
            return;
          }
          addToast(result.message, {
            appearance: "error",
            autoDismiss: true,
          });
          return;
        } catch (err) {}
      };
      AddTime(d);
    }
    const [startDate, setStartDate] = useState<any>();
    return (
      <>
        <DatePicker
          placeholderText={`+${"    "} Add Time Slots`}
          dateFormat="h:mm aa"
          onChange={(date: any) => setStartDate(date)}
          selected={startDate}
          withPortal
          className="inspection"
          showTimeInput
          openToDate={new Date(t)}
          calendarClassName="insp"
        />
        <Button
          cursor="pointer"
          w="2rem"
          bgColor="transparent"
          type="submit"
          isLoading={isLoaded}
          color="black"
          px="0"
          h="2rem"
          disabled={!startDate}
          onClick={timeAdd}
          _hover={{
            bgColor: "transparent",
            color: "black",
          }}
        >
          <Icons iconClass="fa-calendar-check" />
        </Button>
      </>
    );
  }

  return (
    <Box bgColor="white" p="1rem" minH="80vh">
      <Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
        <FaChevronLeft fontSize="20px" />
        <Text
          fontSize="24px"
          fontWeight="bold"
          pl="1rem"
          mb="0 !important"
          textTransform="capitalize"
        >
          {property?.name}
        </Text>
      </Flex>
      <HStack spacing={8} align="flex-start">
        <Flex w="65%" justify="space-between" mt="0.5rem">
          <VStack spacing="1rem" alignItems="flex-start">
            <NameTag title="User" name={user?.fullName as string} />
            <NameTag
              title="Status"
              name={data.active ? "Active" : "Inactive"}
            />
            <NameTag title="State" name={property?.state as string} />
            <NameTag title="Locality" name={property?.lga as string} />
            <NameTag title="Area" name={property?.area as string} />
            <NameTag
              title="Inspection"
              name={
                data.singleInspection !== null
                  ? moment(data.singleInspection?.inspectionTime.time).format(
                      "DD/MM/YY - LT"
                    )
                  : "-"
              }
            />
            <NameTag
              title="Date Applied"
              name={moment(data.dateCreated).format("DD/MM/YY - LT")}
            />
          </VStack>
          <VStack spacing="1.5rem" alignItems="flex-start">
            <Box w="180px" onClick={openModal}>
              <Flex
                as="button"
                w="full"
                h="2.3rem"
                borderRadius="3px"
                border="2px solid rgba(25,25,25,1)"
                align="center"
                justify="center"
                fontSize="14.5px"
                fontWeight="bold"
              >
                View Property
              </Flex>
            </Box>
            <Box w="180px">
              <Button
                w="full"
                h="2.3rem"
                borderRadius="3px"
                variant="outline"
                border="2px solid"
                borderColor="rgba(25,25,25,1)"
                color="rgba(25,25,25,1)"
                fontSize="14.5px"
                fontWeight="bold"
                isLoading={isLoading}
                onClick={() => widgetApi.current.openDialog()}
                _hover={{ variant: "outline" }}
              >
                Upload Documents
              </Button>
              <Widget
                publicKey="fda3a71102659f95625f"
                onChange={(info) => initializeDocuments(info)}
                inputAcceptTypes={`.docx,.doc.pdf`}
                systemDialog
                //@ts-ignore
                ref={widgetApi}
              />
            </Box>
            <Box w="180px" onClick={onOpen}>
              <Flex
                as="button"
                w="full"
                h="2.3rem"
                borderRadius="3px"
                border="2px solid rgba(25,25,25,1)"
                align="center"
                justify="center"
                fontSize="14.5px"
                fontWeight="bold"
              >
                View Application Form
              </Flex>
            </Box>
          </VStack>
        </Flex>
        <Box w="35%">
          {/* <Calendar value={new Date(data.dateCreated)} />
					<TimeDisplay data={data} /> */}
          <Flex justify="space-between" align="center">
            <Text fontWeight="600" fontSize="1.2rem">
              Scheduled Dates
            </Text>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <HStack>
                  <InspectionDate<InspectionDateModel>
                    error={errors.date}
                    name="date"
                    register={register}
                    control={control}
                    minDate={new Date()}
                  />
                  <Button
                    cursor="pointer"
                    w="2rem"
                    bgColor="transparent"
                    type="submit"
                    disabled={!isValid}
                    isLoading={loading}
                    color="black"
                    px="0"
                    h="2rem"
                    _hover={{
                      bgColor: "transparent",
                      color: "black",
                    }}
                  >
                    <Icons iconClass="fa-calendar-check" />
                  </Button>
                </HStack>
              </form>
            </Box>
          </Flex>

          {inspection !== undefined && (
            <>
              {inspection.map((x: InspectionDateView, i: any) => {
                return (
                  <Box
                    key={i}
                    border="2px solid rgba(0,0,0,0.1)"
                    borderRadius="10px"
                    px="1rem"
                    py=".5rem"
                    mt="1rem"
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="bold"
                      mb=".5rem"
                      textTransform="capitalize"
                    >
                      {moment(x.date).format("MMM DD YYYY")}
                    </Text>
                    <HStack
                      mb="1rem"
                      spacing={0}
                      gap={4}
                      overflowX="hidden"
                      flexWrap="wrap"
                    >
                      {x.times?.map((item: InspectionTimeView, i) => {
                        return (
                          <Box
                            key={i}
                            borderRadius="4px"
                            bgColor="gray.200"
                            fontWeight="600"
                            px=".8rem"
                            py=".2rem"
                            flexShrink={0}
                          >
                            {moment(item.time).format("LT")}
                          </Box>
                        );
                      })}
                    </HStack>
                    <Flex
                      justify="space-between"
                      align="center"
                      mb=".4rem"
                      key={i}
                    >
                      <HStack>
                        <TimeItem d={x.id} t={x.date as unknown as Date} />
                      </HStack>
                      <ListItem d={x.id} />
                    </Flex>
                  </Box>
                );
              })}
            </>
          )}
        </Box>
      </HStack>
      <ViewListings isOpen={open} onClose={closeModal} data={property} />
      <ViewApplication isOpen={isOpen} onClose={onClose} data={singleUser} />
    </Box>
  );
}

export default EnquirySingle;
