import { Button } from "@chakra-ui/react";
import Icons from "./Icons";

export function ApproveBtn({ loading, onClick }: any) {
	return (
		<Button
			cursor="pointer"
			h="2rem"
			w="2rem"
			minW="unset"
			color="white"
			fontSize=".8rem"
			bgColor="rgba(47,223,132,1)"
			type="submit"
			borderRadius="50%"
			isLoading={loading}
			onClick={onClick}
		>
			<Icons iconClass="fa-arrow-right" />
		</Button>
	);
}

export function RejectBtn({ loading, onClick }: any) {
	return (
		<Button
			cursor="pointer"
			h="2rem"
			w="2rem"
			minW="unset"
			color="white"
			bgColor="rgba(223,57,47,1)"
			fontSize=".8rem"
			type="submit"
			borderRadius="50%"
			isLoading={loading}
			onClick={onClick}
		>
			<Icons iconClass="fa-times" />
		</Button>
	);
}
