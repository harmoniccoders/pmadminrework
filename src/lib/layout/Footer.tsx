import {
	Box,
	Container,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

import NextLink from "next/link";
import { useRouter } from "next/router";

function Footer() {
	const router = useRouter();
	return (
		<Box
			w="full"
			bgColor="brand.200"
			display={router.pathname.startsWith("/admin") ? "none" : "block"}
		>
			<Box bgColor="black" w="full" py="4rem">
				<Box w="80%" mx="auto">
					<Grid
						templateColumns="repeat(3, 1fr)"
						rowGap="2rem"
						mb="2.5rem"
						display={["grid", "flex"]}
						justifyContent="space-between"
					>
						<GridItem>
							<VStack align="flex-start" spacing={[3, 5]}>
								<Text
									color="brand.300"
									fontSize={["1rem", "18px"]}
									fontWeight="semibold"
								>
									Liquede
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									About Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Contact Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Careers
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									CSR
								</Text>
							</VStack>
						</GridItem>
						<GridItem>
							<VStack align="flex-start" spacing={[3, 5]}>
								<Text
									color="brand.300"
									fontSize={["1rem", "18px"]}
									fontWeight="semibold"
								>
									Liquede
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									About Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Contact Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Careers
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									CSR
								</Text>
							</VStack>
						</GridItem>
						<GridItem>
							<VStack align="flex-start" spacing={[3, 5]}>
								<Text
									color="brand.300"
									fontSize={["1rem", "18px"]}
									fontWeight="semibold"
								>
									Liquede
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									About Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Contact Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Careers
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									CSR
								</Text>
							</VStack>
						</GridItem>
						<GridItem>
							<VStack align="flex-start" spacing={[3, 5]}>
								<Text
									color="brand.300"
									fontSize={["1rem", "18px"]}
									fontWeight="semibold"
								>
									Liquede
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									About Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Contact Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Careers
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									CSR
								</Text>
							</VStack>
						</GridItem>
						<GridItem>
							<VStack align="flex-start" spacing={[3, 5]}>
								<Text
									color="brand.300"
									fontSize={["1rem", "18px"]}
									fontWeight="semibold"
								>
									Liquede
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									About Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Contact Us
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									Careers
								</Text>
								<Text
									color="white"
									fontSize={["14px", "16px"]}
									fontWeight="400"
								>
									CSR
								</Text>
							</VStack>
						</GridItem>
					</Grid>
					<Divider borderColor="brand.300" />
					<Text fontSize={["11px", "14px", "18px"]} color="white" my="1.2rem">
						Liquede is a product of Liquede Limited, a subsidiary of Oxygen
						Holdings. Banking services on Liquede are provided by Bank Limited,
						which is registered with the Central Bank of Nigeria. Payments on
						Liquede are made via Interswitch; a PCI DSS certified payment
						platform with bank-level security to ensure your transactions and
						financial information are kept safe at all times.
					</Text>
					<Divider borderColor="brand.300" />
					<Text fontSize={[".8rem", "1rem"]} color="white" mt="2.5rem">
						© 2020 Liquede Limited. All rights reserved.
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
