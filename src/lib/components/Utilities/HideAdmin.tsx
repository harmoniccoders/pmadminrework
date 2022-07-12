import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Icons from "./Icons";

function HideAdmin() {
	return (
		<Flex
			w="full"
			bgColor="brand.100"
			h="100vh"
			justifyContent="center"
			alignItems="center"
			px={16}
			flexDirection="column"
		>
			<Circle size="6rem" bgColor="white" p=".3rem" border="5px solid white">
				<Image w="full" h="full" objectFit="cover" src="/assets/pm.png" />
			</Circle>
			<Box textAlign="center" mt="1rem" color="white">
				<Text fontSize="1.2rem" fontWeight="600" mb="1rem">
					Oh, hi there!
				</Text>
				<Text fontSize=".9rem" fontWeight="400">
					We currently do not support admin view on this screen resolution.
					Please manage your admin dashboard on a different device, or if you're
					using a laptop, try maximixing it or use a bigger screen
				</Text>
			</Box>
		</Flex>
	);
}

export default HideAdmin;
