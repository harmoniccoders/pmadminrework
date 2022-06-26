import { Text } from "@chakra-ui/react";

export interface tabTypes {
	tabname: string;
	currentTab: string;
}
function Tab({ tabname, currentTab }: tabTypes) {
	return (
		<>
			{/* <Text
				color={currentTab == tabname ? "black" : "gray.500"}
				h="2.2rem"
				display="flex"
				alignItems="center"
				px="3rem"
				cursor="pointer"
				fontWeight="medium"
				fontSize=".9rem"
				textTransform="capitalize"
				// borderRadius="2px 16px 0 0"
				bgColor={currentTab == tabname ? "white" : "rgba(36,68,115,0.03)"}
				transition="all .2s ease"
				_hover={{ color: "black", bgColor: "white" }}
			>
				{tabname}
			</Text> */}
			<Text
				color={currentTab == tabname ? "white" : "black"}
				h="2.2rem"
				display="flex"
				alignItems="center"
				px="2rem"
				cursor="pointer"
				fontWeight="medium"
				fontSize=".9rem"
				textTransform="capitalize"
				borderRadius="2px 22px 0 0"
				bgColor={currentTab == tabname ? "brand.100" : "rgba(36,68,115,0.03)"}
				transition="all .2s ease"
				_hover={{ color: "white", bgColor: "brand.100" }}
			>
				{tabname}
			</Text>
		</>
	);
}

export default Tab;
