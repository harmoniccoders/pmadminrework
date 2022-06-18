import { Flex, Text } from "@chakra-ui/react";

export interface tabTypes {
	tabname: string;
	currentTab: string;
	icon: string;
	num: string | number;
}
function SecondaryTab({ tabname, currentTab, icon, num }: tabTypes) {
	return (
		<Flex
			h="60px"
			alignItems="center"
			justify="space-between"
			pl="1.1rem"
			pr="2rem"
			w="250px"
			cursor="pointer"
			borderRadius="10px 25px 0 0"
			clipPath="polygon(0 0, 88% 0, 100% 100%, 0% 100%)"
			bgColor={currentTab == tabname ? "white" : "rgba(231,231,231,1)"}
			transition="all .2s ease"
			_hover={{ bgColor: "white" }}
		>
			<Flex>
				<i className={`far ${icon}`} style={{ paddingRight: "1.2rem" }}></i>
				<Text fontWeight="medium" fontSize=".9rem" textTransform="capitalize">
					{tabname}
				</Text>
			</Flex>
			<Text
				borderRadius="11.5px"
				h="23px"
				w="55px"
				fontSize="14px"
				fontWeight="500"
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="white"
				bgColor="black"
			>
				{num}
			</Text>
		</Flex>
	);
}

export default SecondaryTab;
