import { Box, Button, Circle, HStack, Switch, Td, Th } from "@chakra-ui/react";
import {
	FaArrowAltCircleRight,
	FaArrowRight,
	FaTimes,
	FaTimesCircle,
	FaTrash,
} from "react-icons/fa";
import Icons from "./Icons";

export function TableHead({ title }: { title: string }) {
	return (
		<Th
			pl="1rem"
			fontSize="14px"
			fontWeight="bold"
			color="black"
			textTransform="capitalize"
			fontFamily="body"
		>
			{title}
		</Th>
	);
}

export function TableData({ name }: { name: string }) {
	return (
		<Td
			fontSize="14px"
			fontWeight="500"
			color="black"
			pl="1rem"
			py="1.3rem"
			textTransform="capitalize"
			maxW="130px"
			overflow="hidden"
			textOverflow="ellipsis"
		>
			{name}
		</Td>
	);
}
export function TableDataWithAvatar({ name }: { name: string }) {
	return (
		<Td
			fontSize="14px"
			fontWeight="600"
			color="black"
			pl="1rem"
			display="flex"
			alignItems="center"
			textTransform="capitalize"
		>
			<Circle
				bg="brand.100"
				size="39px"
				mr=".5rem"
				color="white"
				textTransform="uppercase"
			>
				{name
					.split(/\s/)
					.reduce((response, word) => (response += word.slice(0, 1)), "")}
			</Circle>
			{name}
		</Td>
	);
}
export function TableStatus({ name }: { name: string }) {
	return (
		<Td
			fontSize="14px"
			fontWeight="500"
			pl="1rem"
			textTransform="capitalize"
			color={
				name === "APPROVED" || name === "RESOLVED"
					? "#2FDF84"
					: name === "PENDING"
					? "#E3BC6A"
					: "#FF2929"
			}
		>
			{name}
		</Td>
	);
}
export function TableStatusSlider({ name }: { name: string }) {
	return (
		<Td
			fontSize="14px"
			fontWeight="500"
			pl="1rem"
			color={
				name === "Active" || name === "RESOLVED" ? "black" : "rgba(35,37,39,.5)"
			}
		>
			{name}
			<Switch
				colorScheme="brand"
				ml="1.5rem"
				defaultChecked={name === "Active" ? true : false}
			/>
		</Td>
	);
}
export function TableActions({
	reject,
	approve,
	aLoading,
	rLoading,
	hide,
}: any) {
	return (
		<Td fontSize="14px" fontWeight="500" pl="1rem">
			<HStack spacing={5}>
				<Circle
					color="white"
					bgColor="rgba(223,57,47,1)"
					size="30px"
					onClick={reject}
				>
					{<FaTimes />}
				</Circle>
				<Circle
					color="white"
					bgColor="rgba(47,223,132,1)"
					size="30px"
					onClick={approve}
					display={hide}
				>
					{<FaArrowRight />}
				</Circle>
			</HStack>
		</Td>
	);
}

export function TableDelete({ onClick, loading }: any) {
	return (
		<Td>
			<Button
				cursor="pointer"
				h="2rem"
				w="2rem"
				minW="unset"
				color="black"
				bgColor="transparent"
				fontSize=".8rem"
				type="submit"
				borderRadius="50%"
				isLoading={loading}
				onClick={onClick}
				_hover={{
					bgColor: "transparent",
					color: "black",
				}}
			>
				<Icons iconClass="fa-trash-alt" />
			</Button>
		</Td>
	);
}
