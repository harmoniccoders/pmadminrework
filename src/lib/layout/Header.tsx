import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

function Header() {
	const router = useRouter();

	return (
		<Box
			w="full"
			bgColor="black"
			display={router.pathname.startsWith("/admin") ? "none" : "block"}
		>
			<Container maxW={["full", "90%"]}>
				<Flex justify="space-between" alignItems="center" h="6rem" zIndex="5">
					<Box cursor="pointer" w={["95px", "126px"]}>
						<NextLink href="/">
							<Image src="/assets/logo.png" w="full" h="auto" />
						</NextLink>
					</Box>
					<Box>
						<Button color="black" bgColor="#E3BC6A" w="10rem" fontWeight="bold">
							Get Liquede
						</Button>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}

export default Header;
