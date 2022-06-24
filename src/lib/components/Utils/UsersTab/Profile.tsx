import { Box, Flex, VStack, Text, Switch } from "@chakra-ui/react";
import React from "react";
import { UserView } from "Services";

function Profile({ user }: { user: UserView }) {
	return (
		<Flex justify="space-between" mt="2rem" pr="5rem">
			<VStack spacing="1rem" alignItems="flex-start">
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						First Name
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{user?.firstName}
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Surname
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{user?.lastName}
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Email
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{user?.email}
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Mobile
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{user?.phoneNumber || "No data"}
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Address
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{user?.address || "No data"}
					</Text>
				</Box>
			</VStack>
			<VStack spacing="1rem" alignItems="flex-start">
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						All-time RentRelief
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						{`₦0`}
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Current RentRelief
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						₦0
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Total Listings
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						0
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Total Purchases
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						0
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Active Tenancy
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						0
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Total Sessions
					</Text>
					<Text fontSize="14px" fontWeight="600" color="rgba(15,15,15,1)">
						0
					</Text>
				</Box>
			</VStack>
			<VStack spacing="1rem" alignItems="flex-start">
				<Flex>
					<Text
						fontSize="12px"
						fontWeight="medium"
						color="rgba(15,15,15,.5)"
						mr="0.5rem"
					>
						Account Active
					</Text>
					<Switch colorScheme="brand" defaultChecked />
				</Flex>
			</VStack>
		</Flex>
	);
}

export default Profile;
