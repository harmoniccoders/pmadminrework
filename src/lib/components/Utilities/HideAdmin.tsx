import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";

function HideAdmin() {
	return (
		<Flex
			w="full"
			bgColor="brand.100"
			h="100vh"
			overflow="hidden"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			<Circle size="6rem" bgColor="white" p=".3rem" border="5px solid white">
				<Image w="full" h="full" objectFit="cover" src="/assets/pm.png" />
			</Circle>
			<Box textAlign="center" mt="1rem" color="white">
				<Text fontSize="1.2rem" fontWeight="600" mb="1rem">
					Oh, hi there!
				</Text>
				<Text fontSize="1rem" fontWeight="400" w="80%" mx="auto">
					We currently do not support admin view on this screen resolution.
					Please manage your admin dashboard on a different device, or if you're
					using a desktop, try maximixing to full screen or use a bigger screen
				</Text>
			</Box>
		</Flex>
	);
}

export default HideAdmin;
