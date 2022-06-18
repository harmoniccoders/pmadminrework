import { Box, Flex, Image, VStack, Text, Circle, Icon } from "@chakra-ui/react";
import AdminMenu from "lib/components/Utils/AdminMenu";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

function SideNav() {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	const [opened, setOpened] = useState(true);
	const openMobileMenu = () => {
		setOpened(!opened);
	};
	return (
		<Box
			w={["80%", "16%"]}
			pos="fixed"
			h="full"
			bgColor="brand.100"
			zIndex={"6"}
			borderRadius="8px 4px 22px rgba(0, 0, 0, 0.2)"
			transition="all .3s ease-in-out"
			left={[opened ? "-100%" : "0", "unset"]}
		>
			<Flex w="106px" ml="2rem" my="1.5rem">
				<Image src="/assets/logo.png" w="auto" />
			</Flex>
			<Circle
				size="1.5rem"
				top="10%"
				bg="black"
				pos="absolute"
				right={opened ? "-34%" : "-3.5%"}
				onClick={() => openMobileMenu()}
				display={["flex", "none"]}
				justifyContent="center"
				zIndex="7"
			>
				<Icon as={FiChevronRight} color="white" />
			</Circle>
			<VStack align="flex-start" onClick={() => openMobileMenu()}>
				<AdminMenu
					text="Dashboard"
					url="/admin/dashboard"
					icon="fa-analytics"
				/>
				<AdminMenu text="Users" url="/admin/users" icon="fa-users" />
				<AdminMenu
					text="Transactions"
					url="/admin/transactions"
					icon="fa-history"
				/>
				<AdminMenu text="Savings" url="/admin/savings" icon="fa-piggy-bank" />
				<AdminMenu text="Loans" url="/admin/loans" icon="fa-percentage" />
				<AdminMenu
					text="Investments"
					url="/admin/investments"
					icon="fa-building"
				/>
				<AdminMenu text="Payments" url="/admin/payments" icon="fa-money-bill" />
				<AdminMenu text="Services" url="/admin/services" icon="fa-window" />
				<AdminMenu text="Settings" url="/admin/settings" icon="fa-cog" />
			</VStack>
		</Box>
	);
}

export default SideNav;
