import { Box, color, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type CardsType = {
	text: string;
	url: string;
	icon: string;
};
function AdminMenu({ text, url, icon }: CardsType) {
	const router = useRouter();
	const getNavLinks = (style: string) => {
		if (router.asPath.startsWith(url)) return `${style}`;
	};
	return (
		// <Box display="inline">
		<NextLink href={url} passHref>
			<Flex
				align="center"
				p=".5rem 0 .5rem 2rem"
				fontWeight={getNavLinks("brand.100") ? "bold" : "500"}
			>
				<Box color={getNavLinks("brand.100") ? "brand.300" : "white"}>
					<i
						className={`fal ${icon}`}
						style={{
							paddingRight: "1.5rem",
						}}
					></i>
				</Box>
				<Text
					fontSize="1rem"
					// color={getNavLinks("brand.100") ? "brand.300" : "white"}
					color="white"
					// backgroundColor={getNavLinks("rgba(223, 248, 249, 1)")}
					w="100%"
					cursor="pointer"
					_hover={{ color: "brand.200", textDecoration: "unset" }}
					_focus={{ boxShadow: "0" }}
				>
					{text}
				</Text>
			</Flex>
		</NextLink>
		// </Box>
	);
}

export default AdminMenu;
