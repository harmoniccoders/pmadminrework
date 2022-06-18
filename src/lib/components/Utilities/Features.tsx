import { Flex, Text } from "@chakra-ui/react";

function Features({ text, icon }: { text: string; icon: string }) {
	return (
		<Flex align="center">
			<i
				className={`fal fa-${icon}`}
				style={{
					paddingRight: ".8rem",
					fontSize: "12px",
					color: "rgba(227,188,106,1)",
				}}
			></i>
			<Text fontSize="12px" color="rgba(25,25,25,0.4)">
				{text}
			</Text>
		</Flex>
	);
}

export default Features;
