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
			<Flex w="148px" ml="2rem" my="2rem">
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
			<VStack align="flex-start" onClick={() => openMobileMenu()} spacing={4}>
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
				<AdminMenu text="Listings" url="/admin/listings" icon="fa-building" />
				<AdminMenu text="Cleaning" url="/admin/cleaning" icon="fa-vacuum" />
				<AdminMenu text="Rent" url="/admin/rent" icon="fa-house-user" />
				<AdminMenu
					text="Rent Relief"
					url="/admin/relief"
					icon="fa-percentage"
				/>
				{/* <AdminMenu
					text="Verification"
					url="/admin/verification"
					icon="fa-file-search"
				/> */}
				<AdminMenu text="Complaints" url="/admin/complaints" icon="fa-unlink" />
				{/* <AdminMenu text="Payments" url="/admin/payments" icon="fa-money-bill" /> */}
				<AdminMenu text="Admin" url="/admin/admin" icon="fa-cog" />
			</VStack>
		</Box>
	);
}

export default SideNav;
