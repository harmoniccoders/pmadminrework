import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";

function Loans() {
	return (
		<Flex mt="2rem" pr="1rem">
			<VStack spacing="1rem" alignItems="flex-start" w="40%">
				<Heading fontSize="18px" fontWeight="bold">
					Statistics
				</Heading>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Total Loan Amount
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦3,567,800
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Current Loan Amount
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦500,000
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Current Loan Balance
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦500,000
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Credit Score
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦500,000
					</Text>
				</Box>
			</VStack>
			<Box w="60%">
				<Heading fontSize="18px" fontWeight="bold" mb="1.5rem">
					Loans
				</Heading>
				<Grid templateColumns="repeat(3, 1fr)" gap="1.5rem" w="full">
					<VStack
						spacing="1rem"
						alignItems="flex-start"
						borderBottom="1px solid rgba(151,151,151,.4)"
						pb="1.5rem"
					>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Amount
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦3,567,800
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Date Approved
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								25/11/22
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Type
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Personal
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Tenure
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								6 Months
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Interest Rate
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								15%
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Instalments
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦500,000/Monthly
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Status
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Repaid
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Balance
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								0
							</Text>
						</Box>
					</VStack>
					<VStack
						spacing="1rem"
						alignItems="flex-start"
						borderBottom="1px solid rgba(151,151,151,.4)"
						pb="1.5rem"
					>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Amount
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦3,567,800
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Date Approved
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								25/11/22
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Type
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Personal
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Tenure
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								6 Months
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Interest Rate
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								15%
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Instalments
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦500,000/Monthly
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Status
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Repaid
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Balance
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								0
							</Text>
						</Box>
					</VStack>
					<VStack
						spacing="1rem"
						alignItems="flex-start"
						borderBottom="1px solid rgba(151,151,151,.4)"
						pb="1.5rem"
					>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Amount
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦3,567,800
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Date Approved
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								25/11/22
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Type
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Personal
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Tenure
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								6 Months
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Interest Rate
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								15%
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Instalments
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								₦500,000/Monthly
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Status
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								Repaid
							</Text>
						</Box>
						<Box>
							<Text
								fontSize="12px"
								fontWeight="medium"
								color="rgba(15,15,15,.5)"
							>
								Loan Balance
							</Text>
							<Text
								fontSize="14px"
								fontWeight="medium"
								color="rgba(15,15,15,1)"
							>
								0
							</Text>
						</Box>
					</VStack>
				</Grid>
			</Box>
		</Flex>
	);
}

export default Loans;
