import { Box, Flex } from "@chakra-ui/react";
import HideAdmin from "lib/components/Utilities/HideAdmin";
import Login from "lib/components/Utils/Login";
import useWindowDimensions from "lib/components/Utils/useWindowDimensions";
import { UserContext } from "lib/Utils/MainContext";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const { admin, setAdmin } = useContext(UserContext);

	const { height, width } = useWindowDimensions();
	// console.log({ width });

	return (
		<>
			{router.pathname.startsWith("/admin/") ? (
				<>
					{width != null && width <= 1300 ? (
						<HideAdmin />
					) : (
						<>
							{!admin === null || !admin === undefined ? (
								<Login />
							) : (
								<Flex pos="relative" minH="100vh">
									<SideNav />
									<Box
										w={["full", "84%"]}
										h="full"
										bg="#f4f8fb"
										as="main"
										ml="auto"
									>
										<TopNav />
										<Box
											as="div"
											w="95%"
											mx="auto"
											minH="100vh"
											mt="1rem"
											mb="3rem"
										>
											{children}
										</Box>
									</Box>
								</Flex>
							)}
						</>
					)}
				</>
			) : (
				<>
					<Header />
					<Box as="main">{children}</Box>
					<Footer />
				</>
			)}
		</>
	);
};

export default Layout;
