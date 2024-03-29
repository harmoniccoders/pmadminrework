import { Flex, HStack, Text } from "@chakra-ui/react";
const moment = require("moment");

function TimeDisplay({ data }: any) {
	const time = moment(data.dateCreated).format("LT");
	const lt = time.split(" ")[1];

	return (
		<Flex justify="space-between" align="center" mt="1rem">
			<Text fontSize="20px" fontWeight="600">
				Time
			</Text>
			<HStack>
				<Flex
					bgColor="rgba(118,118,128,0.12)"
					h="36px"
					w="86px"
					alignItems="center"
					justify="center"
					fontSize="22px"
					borderRadius="6px"
				>
					{time.replace(/PM|AM/g, "")}
				</Flex>
				<Flex
					fontSize="13px"
					bgColor="rgba(118,118,128,0.12)"
					h="36px"
					w="100px"
					alignItems="center"
					justify="space-between"
					borderRadius="6px"
					px=".3rem"
					fontWeight="600"
				>
					<Text
						bg={lt === "AM" ? "white" : "unset"}
						// border="0.5px solid rgba(0,0,0,0.04)"
						borderRadius="6.93px"
						h="33px"
						w="51px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						boxShadow={
							lt === "AM"
								? "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)"
								: "unset"
						}
					>
						AM
					</Text>
					<Text
						bg={lt === "PM" ? "white" : "unset"}
						border="0.5px solid rgba(0,0,0,0.04)"
						borderRadius="6.93px"
						h="33px"
						w="51px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						boxShadow={
							lt === "PM"
								? "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)"
								: "unset"
						}
					>
						PM
					</Text>
				</Flex>
			</HStack>
		</Flex>
	);
}

export default TimeDisplay;
