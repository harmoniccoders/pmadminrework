import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import PropertyDetails from "../Utilities/PropertyDetails";

function ViewListings({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
	return (
		<Modal
			motionPreset="slideInBottom"
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(90deg)"
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
				<ModalHeader>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						View Property
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box maxH="80vh" overflow="auto" px="1rem">
						<PropertyDetails />
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default ViewListings;
