import { Box, Flex } from "@chakra-ui/react";
import Login from "lib/components/Utils/Login";
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
	return (
		<>
			{router.pathname.startsWith("/admin/") ? (
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
