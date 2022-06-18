import { Flex, HStack, Icon, Select, Text } from "@chakra-ui/react";
import React from "react";

function Filter() {
	return (
		<HStack justifyContent="flex-end" align="center" spacing={6} marginTop="1rem" cursor='pointer'>
			<Flex
				w="142px"
				h="36px"
				bgColor="rgba(0,0,0,.03)"
				justify="space-between"
				alignItems="center"
				px="1.1rem"
			>
				<Text color="black" fontSize="14px" fontWeight="600">
					Export
				</Text>
				<i
					className="far fa-file-export"
					style={{ color: "rgba(0, 0, 0, 0.3)" }}
				></i>
			</Flex>
			<Flex
				w="99px"
				h="36px"
				bgColor="white"
				justify="space-between"
				alignItems="center"
				px="1.1rem"
				border="1px solid rgba(0, 0, 0, 0.3)"
				borderRadius="3px"
			>
				<Text color="rgba(0, 0, 0, 0.3)" fontSize="12px" fontWeight="500">
					Filter
				</Text>
			</Flex>
			<Select
				placeholder="5 aug 2020 - 7 aug 2020"
				borderRadius="3px"
				w="217px"
				color="rgba(0, 0, 0, 0.3)"
				fontSize="12px"
				fontWeight="500"
			>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>
		</HStack>
	);
}

export default Filter;
