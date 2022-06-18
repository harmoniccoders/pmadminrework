import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";

function Statistics() {
	return (
		<Flex mt="2rem" pr="1rem">
			<VStack spacing="1rem" alignItems="flex-start" w="40%">
				<Heading fontSize="18px" fontWeight="bold">
					Statistics
				</Heading>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						All Time Savings
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦3,567,800
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Current Total Savings
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦500,000
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Active Users
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						67,456
					</Text>
				</Box>
			</VStack>
		</Flex>
	);
}

export default Statistics;
