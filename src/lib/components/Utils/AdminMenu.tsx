import { Box, Link } from "@chakra-ui/react";
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
			<Link
				fontSize="1rem"
				color={getNavLinks("brand.100") ? "brand.300" : "white"}
				// backgroundColor={getNavLinks("rgba(223, 248, 249, 1)")}
				p=".5rem 0 .5rem 2rem"
				w="100%"
				_hover={{ color: "brand.200", textDecoration: "unset" }}
				_focus={{ boxShadow: "0" }}
			>
				<i className={`fal ${icon}`} style={{ paddingRight: "1.2rem" }}></i>
				{text}
			</Link>
		</NextLink>
		// </Box>
	);
}

export default AdminMenu;
