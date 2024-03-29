import {
  Box,
  Flex,
  VStack,
  Text,
  Switch,
  Grid,
  Image,
  HStack,
} from "@chakra-ui/react";
import Icons from "lib/components/Utilities/Icons";
import Naira from "lib/components/Utilities/Naira";
import React from "react";
import { UserView } from "Services";

const iconStyle = {
  color: "#0042ff",
};
function UserLists({
  user,
  enquires,
  requests,
}: {
  user: UserView;
  enquires: any;
  requests: any;
}) {
  const lists = user.properties;
  console.log({ user });
  console.log({ enquires, requests });

  return (
    <Grid
      templateColumns="repeat(3,1fr)"
      w="full"
      overflow="hidden"
      gridGap={7}
    >
      <Box w="full">
        <Text fontWeight="bold" fontSize="1.1rem" my="2rem">
          Enquiries
        </Text>
        <VStack spacing={5} w="full">
          {enquires?.value?.slice(0, 5)?.map((x: any) => {
            return (
              <HStack w="full" spacing={3}>
                <Box
                  w="80px"
                  h="80px"
                  borderRadius="6px"
                  bgColor="gray"
                  overflow="hidden"
                  flexShrink={0}
                >
                  <Image
                    src={x?.property?.mediaFiles[0]?.url || "/assets/plc.png"}
                    alt="propery-image"
                    w="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
                <VStack
                  alignItems="flex-start"
                  borderBottom="1px solid #e5e5e5"
                  pb=".2rem"
                  w="full"
                  spacing={1}
                  overflow="hidden"
                >
                  <Text
                    w="100px"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    fontSize=".9rem"
                    fontWeight="600"
                  >
                    {x?.property?.name}
                  </Text>
                  <Flex w="full" justify="space-between" fontSize=".8rem">
                    <Text>Location:</Text>
                    <Text color="brand.100" fontWeight="500" noOfLines={1}>
                      {`${x?.property?.state} ${x?.property?.area}`}
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icons iconClass="fa-tags" style={iconStyle} />
                    <Text
                      fontSize="13px"
                      ml="4px"
                      fontWeight="500"
                      noOfLines={1}
                    >
                      {Naira(x?.property?.price)}
                    </Text>
                  </Flex>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </Box>
      <Box w="full">
        <Text fontWeight="bold" fontSize="1.1rem" my="2rem">
          For Sale
        </Text>
        <VStack spacing={5} w="full">
          {lists
            ?.filter((x: any) => x.isForSale)
            .slice(0, 5)
            ?.map((x: any) => {
              return (
                <HStack w="full" spacing={3}>
                  <Box
                    w="80px"
                    h="80px"
                    borderRadius="6px"
                    bgColor="gray"
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <Image
                      src={x.mediaFiles[0]?.url || "/assets/plc.png"}
                      alt="propery-image"
                      w="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <VStack
                    alignItems="flex-start"
                    borderBottom="1px solid #e5e5e5"
                    pb=".2rem"
                    w="full"
                    spacing={1}
                    overflow="hidden"
                  >
                    <Text
                      w="100px"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      fontSize=".9rem"
                      fontWeight="600"
                    >
                      {x.name}
                    </Text>
                    <Flex w="full" justify="space-between" fontSize=".8rem">
                      <Text>Location:</Text>
                      <Text color="brand.100" fontWeight="500">
                        {`${x.state} ${x.area}`}
                      </Text>
                    </Flex>
                    <Flex alignItems="center">
                      <Icons iconClass="fa-tags" style={iconStyle} />
                      <Text fontSize="13px" ml="4px" fontWeight="500">
                        {Naira(x.price)}
                      </Text>
                    </Flex>
                  </VStack>
                </HStack>
              );
            })}
        </VStack>
      </Box>
      <Box w="full">
        <Text fontWeight="bold" fontSize="1.1rem" my="2rem">
          Requests
        </Text>
        <VStack spacing={5} w="full">
          {requests?.value?.slice(0, 5)?.map((x: any) => {
            return (
              <HStack w="full" spacing={3}>
                <Box
                  w="80px"
                  h="80px"
                  borderRadius="6px"
                  bgColor="gray"
                  overflow="hidden"
                  flexShrink={0}
                >
                  <Image
                    src={"/assets/placeholder.jpg"}
                    alt="propery-image"
                    w="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
                <VStack
                  alignItems="flex-start"
                  borderBottom="1px solid #e5e5e5"
                  pb=".2rem"
                  w="full"
                  spacing={1}
                  overflow="hidden"
                >
                  <Text
                    w="100px"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    fontSize=".9rem"
                    fontWeight="600"
                    textTransform={"capitalize"}
                  >
                    {x.numberOfBedRooms} Bedroom{" "}
                    {x.propertyType.name.toLowerCase()}
                  </Text>
                  <Flex w="full" justify="space-between" fontSize=".8rem">
                    <Text>Location:</Text>
                    <Text color="brand.100" fontWeight="500">
                      {`${x.state} ${x.lga}`}
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icons iconClass="fa-tags" style={iconStyle} />
                    <Text fontSize="13px" ml="4px" fontWeight="500">
                      {Naira(x.budget)}
                    </Text>
                  </Flex>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </Grid>
  );
}

export default UserLists;
{
  /* <Box w="full">
				<Text fontWeight="bold" fontSize="1.1rem" my="2rem">
					Enquires
				</Text>
				<VStack spacing={5} w="full">
					{lists?.map((x: any) => {
						return (
							<HStack w="full" spacing={3}>
								<Box
									w="80px"
									h="80px"
									pos="relative"
									borderRadius="6px"
									bgColor="gray"
									overflow="hidden"
									flexShrink={0}
								>
									<Image
										src={x.mediaFiles[0]?.url || ""}
										alt="propery-image"
										w="100%"
										height="100%"
										objectFit="cover"
									/>
								</Box>
								<VStack
									alignItems="flex-start"
									borderBottom="1px solid #e5e5e5"
									pb=".2rem"
									w="full"
									spacing={1}
								>
									<Text
										w="full"
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										fontSize=".9rem"
										fontWeight="600"
									>
										{x.name}
									</Text>
									<Flex w="full" justify="space-between" fontSize=".8rem">
										<Text>Seller:</Text>
										<Text color="brand.100" fontWeight="500">
											{`${x.state} ${x.area}`}
										</Text>
									</Flex>
									<Flex alignItems="center">
										<Icons iconClass="fa-tags" style={iconStyle} />
										<Text fontSize="13px" ml="4px" fontWeight="500">
											{Naira(x.price)}
										</Text>
									</Flex>
								</VStack>
							</HStack>
						);
					})}
				</VStack>
			</Box>
			<Box w="full">
				<Text fontWeight="bold" fontSize="1.1rem" my="2rem">
					For Sale
				</Text>
				<VStack spacing={5}>
					{lists?.map((x: any) => {
						return (
							<HStack w="full" spacing={3}>
								<Box
									w="80px"
									h="80px"
									pos="relative"
									borderRadius="6px"
									bgColor="gray"
									overflow="hidden"
									flexShrink={0}
								>
									<Image
										src={x.mediaFiles[0]?.url || ""}
										alt="propery-image"
										w="100%"
										height="100%"
										objectFit="cover"
									/>
								</Box>
								<VStack
									alignItems="flex-start"
									borderBottom="1px solid #e5e5e5"
									pb=".2rem"
									w="full"
									spacing={1}
								>
									<Text
										w="full"
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										fontSize=".9rem"
										fontWeight="600"
									>
										{x.name}
									</Text>
									<Flex w="full" justify="space-between" fontSize=".8rem">
										<Text>Seller:</Text>
										<Text color="brand.100" fontWeight="500">
											{`${x.state} ${x.area}`}
										</Text>
									</Flex>
									<Flex alignItems="center">
										<Icons iconClass="fa-tags" style={iconStyle} />
										<Text fontSize="13px" ml="4px" fontWeight="500">
											{Naira(x.price)}
										</Text>
									</Flex>
								</VStack>
							</HStack>
						);
					})}
				</VStack>
			</Box>
			<Box w="full">
				<Text fontWeight="bold" fontSize="1.1rem" my="2rem">
					Requests
				</Text>
				<VStack spacing={5}>
					{lists?.map((x: any) => {
						return (
							<HStack w="full" spacing={3}>
								<Box
									w="80px"
									h="80px"
									pos="relative"
									borderRadius="6px"
									bgColor="gray"
									overflow="hidden"
									flexShrink={0}
								>
									<Image
										src={x.mediaFiles[0]?.url || ""}
										alt="propery-image"
										w="100%"
										height="100%"
										objectFit="cover"
									/>
								</Box>
								<VStack
									alignItems="flex-start"
									borderBottom="1px solid #e5e5e5"
									pb=".2rem"
									w="full"
									spacing={1}
								>
									<Text
										w="full"
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										fontSize=".9rem"
										fontWeight="600"
									>
										{x.name}
									</Text>
									<Flex w="full" justify="space-between" fontSize=".8rem">
										<Text>Seller:</Text>
										<Text color="brand.100" fontWeight="500">
											{`${x.state} ${x.area}`}
										</Text>
									</Flex>
									<Flex alignItems="center">
										<Icons iconClass="fa-tags" style={iconStyle} />
										<Text fontSize="13px" ml="4px" fontWeight="500">
											{Naira(x.price)}
										</Text>
									</Flex>
								</VStack>
							</HStack>
						);
					})}
				</VStack>
			</Box> */
}
