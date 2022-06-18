import { Text, Circle, Flex, Image, Icon } from "@chakra-ui/react";
import { UserContext } from "lib/Utils/MainContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function TopNav() {
	const router = useRouter();
	const { admin } = useContext(UserContext);

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
			<Flex align="center">
				<Text fontWeight="600" fontSize="1rem" pr=".8rem">
					{`Hi, ${admin ? admin.firstName : "Pade"}`}
				</Text>
				<Circle size="50px" overflow="hidden" bg="gray">
					<Image
						src="/assets/whoarewe.png"
						w="full"
						h="full"
						objectFit="cover"
					/>
				</Circle>
				<Icon as={IoIosArrowDown} ml=".8rem" />
			</Flex>
		</Flex>
	);
}
