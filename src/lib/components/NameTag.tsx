import { Box, Text } from "@chakra-ui/react";

function NameTag({ title, name }: { title: string; name: string }) {
	return (
		<Box>
			<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
				{title}
			</Text>
			<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
				{name}
			</Text>
		</Box>
	);
}

export default NameTag;
