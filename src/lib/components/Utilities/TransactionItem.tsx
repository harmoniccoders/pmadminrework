import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SingleTransaction from "../Modals/SingleTransaction";

export interface itemInfo {
	title: string;
	value: string;
	amount: string;
	date: string;
	time: string;
	recepient: string;
	tranStatus: string;
	refrenceId: string;
}

function TransactionItem({
	title,
	value,
	amount,
	date,
	time,
	recepient,
	tranStatus,
	refrenceId,
}: itemInfo) {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<Flex
			w="full"
			h="4rem"
			border="1px solid rgba(124,124,124,0.18)"
			borderRadius="4px"
			align="center"
			justify="space-between"
			fontSize="16px"
			fontWeight="500"
			px="1rem"
			color="rgba(37,36,39,1)"
			cursor="pointer"
			onClick={() => openModal()}
		>
			<Flex align="center">
				<BsArrowUpCircleFill color="rgba(154,167,179,1)" size="32px" />
				<Box ml=".5rem">
					<Text
						fontSize="16px"
						fontWeight="500"
						color="rgba(37,36,39,1)"
						textTransform="capitalize"
					>
						{title}
					</Text>
					<Text
						fontSize="14px"
						fontWeight="medium"
						color="rgba(37,36,39,.5)"
						textTransform="capitalize"
					>
						{value}
					</Text>
				</Box>
			</Flex>
			<Text
				fontSize="16px"
				fontWeight="500"
				color="rgba(37,36,39,1)"
				textTransform="capitalize"
			>
				{amount}
			</Text>
			<SingleTransaction
				title={title}
				amount={amount}
				isOpen={isOpen}
				onClose={closeModal}
				date={date}
				time={time}
				recepient={recepient}
				tranStatus={tranStatus}
				refrenceId={refrenceId}
			/>
		</Flex>
	);
}

export default TransactionItem;
