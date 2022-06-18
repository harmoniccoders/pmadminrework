import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";

function Savings() {
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
			</VStack>
			<Grid templateColumns="repeat(2, 1fr)" gap="1.5rem" w="60%">
				<VStack
					spacing="1rem"
					alignItems="flex-start"
					borderBottom="1px solid rgba(151,151,151,.4)"
					pb="1.5rem"
				>
					<Heading fontSize="18px" fontWeight="bold">
						Wedding Goal
					</Heading>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Amount
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦3,567,800
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Date
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							25/11/22
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Total Contribution
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦500,000
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Completion
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							10%
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Automated
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							Yes
						</Text>
					</Box>
				</VStack>
				<VStack
					spacing="1rem"
					alignItems="flex-start"
					borderBottom="1px solid rgba(151,151,151,.4)"
					pb="1.5rem"
				>
					<Heading fontSize="18px" fontWeight="bold">
						Wedding Goal
					</Heading>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Amount
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦3,567,800
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Date
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							25/11/22
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Total Contribution
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦500,000
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Completion
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							10%
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Automated
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							Yes
						</Text>
					</Box>
				</VStack>
				<VStack
					spacing="1rem"
					alignItems="flex-start"
					borderBottom="1px solid rgba(151,151,151,.4)"
					pb="1.5rem"
				>
					<Heading fontSize="18px" fontWeight="bold">
						Wedding Goal
					</Heading>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Amount
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦3,567,800
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Target Date
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							25/11/22
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Total Contribution
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							₦500,000
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Completion
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							10%
						</Text>
					</Box>
					<Box>
						<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
							Automated
						</Text>
						<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
							Yes
						</Text>
					</Box>
				</VStack>
			</Grid>
		</Flex>
	);
}

export default Savings;
