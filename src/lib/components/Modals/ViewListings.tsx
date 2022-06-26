import {
	Box,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { PropertyView } from "Services";
import PropertyDetails from "../Utilities/PropertyDetails";

function ViewListings({
	isOpen,
	onClose,
	data,
}: {
	isOpen: boolean;
	onClose: any;
	data: PropertyView;
}) {
	console.log({ data });

	return (
		<Modal
			motionPreset="slideInBottom"
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(5deg)"
			/>
			<ModalContent
				py={5}
				borderRadius="0"
				w={["88%", "48%"]}
				overflow="hidden"
				maxH="100vh"
				mt="0"
				mb="0"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
			>
				<ModalHeader
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						View Property
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<Box maxH="80vh" overflow="auto" px="1rem">
						<PropertyDetails data={data} />
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default ViewListings;
