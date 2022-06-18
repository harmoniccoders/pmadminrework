import {
	Box,
	HStack,
	VStack,
	Text,
	Image,
	Flex,
	Switch,
} from "@chakra-ui/react";
import LimitModal from "lib/components/Modals/LimitModal";
import TransactionModal from "lib/components/Modals/TransactionModal";
import CopyBtn from "lib/components/Utilities/CopyBtn";
import React, { useState } from "react";

function SlipCard() {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const [isLimit, setIsLimit] = useState(false);
	const limitModal = () => {
		setIsLimit(true);
	};
	const closeLimit = () => {
		setIsLimit(false);
	};
	return (
		<VStack w="83%" align="flex-start" spacing={6} mt="3rem !important">
			<HStack w="full" spacing={6} alignItems="flex-end">
				<VStack w="50%">
					<Box w="full">
						<Text
							fontSize="14px"
							fontWeight="500"
							color="rgba(37,36,39,.5)"
							textAlign="center"
						>
							SLIPCARD Balance
						</Text>
						<Text
							fontSize="35px"
							fontWeight="700"
							color="rgba(25,25,25,1)"
							textAlign="center"
						>
							₦43,350
						</Text>
					</Box>
					<Box w="full">
						<Image src="/assets/slipcard.png" w="full" h="auto" />
					</Box>
				</VStack>
				<VStack w="50%" align="flex-start" spacing={6} mb="1rem !important">
					<Box w="90%" onClick={() => openModal()}>
						<Flex
							as="button"
							w="full"
							h="2.3rem"
							borderRadius="3px"
							border="2px solid rgba(25,25,25,1)"
							align="center"
							justify="center"
							fontSize="14.5px"
							fontWeight="bold"
						>
							View Transactions
						</Flex>
					</Box>
					<Box w="90%" onClick={() => limitModal()}>
						<Flex
							as="button"
							w="full"
							h="2.3rem"
							borderRadius="3px"
							border="2px solid rgba(25,25,25,1)"
							align="center"
							justify="center"
							fontSize="14.5px"
							fontWeight="bold"
						>
							Set Limits
						</Flex>
					</Box>
					<Box w="90%">
						<Flex
							w="full"
							h="3rem"
							borderBottom="1px solid rgba(25,25,25,.2)"
							align="center"
							justify="space-between"
							fontSize="16px"
							fontWeight="500"
							px="1rem"
							color="rgba(37,36,39,1)"
						>
							<Flex align="center">
								<i className="far fa-snowflake" />
								<Text ml="1rem">Freeze SLIP Card</Text>
							</Flex>
							<Switch colorScheme="brand" />
						</Flex>
					</Box>
				</VStack>
			</HStack>
			<VStack w="50%" align="flex-start" px={5}>
				<CopyBtn title="Card Holder Name" value="Pade Omotoso" />
				<CopyBtn title="Card Number" value="2394 2034 0023 3203 8749" />
				<CopyBtn title="Expiry Date" value="11/23" />
				<CopyBtn title="CVV" value="677" />
				<CopyBtn
					title="Billing Address"
					value="1 Liquede Drive, Lekki Phase 1, Lekki, Lagos NG"
				/>
			</VStack>
			<TransactionModal isOpen={isOpen} onClose={closeModal} />
			<LimitModal isOpen={isLimit} onClose={closeLimit} />
		</VStack>
	);
}

export default SlipCard;
