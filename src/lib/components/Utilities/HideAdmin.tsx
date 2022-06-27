import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Icons from "./Icons";

function HideAdmin() {
	return (
		<Flex
			w="full"
			bgColor="white"
			h="100vh"
			justify="center"
			align="center"
			px={16}
			flexDirection="column"
		>
			<Icons
				iconClass={"fal fa-exclamation-triangle"}
				style={{ color: "red", fontSize: "5rem" }}
			/>
			<Box textAlign="center" mt="1rem" color="red">
				<Text fontSize="1.2rem" fontWeight="medium">
					Sorry we do not support admin view on this screen resolution.
				</Text>
				<Text fontSize="1rem" fontWeight="medium">
					kindly upgrade your device to a larger screen or toggle full screen if
					you're viewing with a minimized tab on browser
				</Text>
			</Box>
		</Flex>
	);
}

export default HideAdmin;
