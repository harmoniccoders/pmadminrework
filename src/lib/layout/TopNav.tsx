import { Text, Circle, Flex, Image, Icon, VStack, Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import UpdateUserModal from "lib/components/Modals/UpdateUserModal";
import listenForOutsideClick from "lib/components/Utils/listenForOutsideClick";
import { UserContext } from "lib/Utils/MainContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function TopNav() {
	const router = useRouter();
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>();
	const LogUserOut = () => {
		Cookies.remove("user");
		Cookies.remove("token");
		Cookies.remove("userIn");
		window.location.href = "/";
	};
	const users = Cookies.get("user") as unknown as string;
	let user;
	if (users !== undefined) {
		user = JSON.parse(users);
	}

	const [isOpen, setIsOpen] = useState(false);
	const dropDown = useRef(null);
	const [listening, setListening] = useState(false);

	useEffect(
		listenForOutsideClick(listening, setListening, dropDown, setIsMenuOpened)
	);

	const changePassword = () => {
		setIsOpen(true);
	};

	return (
		<Flex
			align="center"
			h="4.5rem"
			bg="white"
			w="full"
			px={7}
			justifyContent="space-between"
		>
			<Text fontSize="22px" fontWeight="bold" textTransform="capitalize">
				{router.pathname.replace("/admin/", "").split("/")[0]}
			</Text>
			<Box pos="relative">
				<Flex
					align="center"
					ref={dropDown}
					onClick={() => setIsMenuOpened((prev) => !prev)}
				>
					<Text fontWeight="600" fontSize="1rem" pr=".8rem">
						{`Hi, ${user ? user?.firstName : "Pade"}`}
					</Text>
					<Circle size="50px" overflow="hidden" bg="gray">
						<Image
							src={user?.profilePicture || "/assets/user-icon.png"}
							w="full"
							h="full"
							objectFit="cover"
						/>
					</Circle>
					<Icon as={IoIosArrowDown} ml=".8rem" />
				</Flex>
				<VStack
					bg="white"
					align="start"
					p={["2", "5"]}
					mt={["0", "0"]}
					w="fit-content"
					zIndex={50}
					shadow={["none", "md"]}
					position={["relative", "absolute"]}
					display={isMenuOpened ? "flex" : "none"}
					transition={"all .5s ease"}
					overflow="hidden"
					fontWeight="600"
					whiteSpace="nowrap"
				>
					<Text
						cursor="pointer"
						onClick={() => changePassword()}
						w="full"
						_hover={{ color: "brand.100" }}
					>
						Change Password
					</Text>
					<Text
						w="full"
						cursor="pointer"
						_hover={{ color: "brand.100" }}
						onClick={() => LogUserOut()}
					>
						Logout
					</Text>
				</VStack>
			</Box>
			<UpdateUserModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
		</Flex>
	);
}
