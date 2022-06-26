import { Flex, Icon, Square, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PagedCollection } from "types/AppTypes";
import Icons from "./Icons";

function Pagination({
	data,
	userId,
}: {
	data: PagedCollection;
	userId?: number;
}) {
	console.log({ userId });

	const totalPages = Math.ceil(
		(data?.size as number) / (data?.limit as unknown as number)
	);

	const currentPage = (((data?.limit as unknown as number) +
		(data?.offset as unknown as number)) /
		(data?.limit as unknown as number)) as number;

	const router = useRouter();
	const next = data.next?.href;
	const previous = data.previous?.href;

	const iconStyle = {
		color: "white",
	};

	const paginate = (direction: "next" | "previous") => {
		let link = "";
		if (direction == "previous" && previous != null) {
			link = previous!.split("?")[1];
			router.push({
				query: {
					url: link,
				},
			});
		}
		if (direction == "next" && next != null) {
			link = next!.split("?")[1];
			if (userId == 0) {
				router.push({
					query: {
						url: link,
						userId,
					},
				});
				return;
			}
			router.push({
				query: {
					url: link,
					// userId: 15,
				},
			});
		}
	};
	return (
		<Flex align="center" justify="center" p="0 2rem" w="100%">
			<Flex align="center">
				<Square
					size="30px"
					// borderRadius="2px"
					// boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
					bgColor="white"
					cursor="pointer"
					border="1px solid #D0D0D0"
					onClick={() => paginate("previous")}
					// mr="5px"
				>
					<Icons iconClass="fa-angle-left" />
					{/* <Icon as={FiChevronLeft} color="#323232" fontSize="1.2rem" /> */}
				</Square>
				<Square
					size="30px"
					// boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
					bgColor="white"
					cursor="pointer"
					fontWeight="600"
					fontSize="14px"
					border="1px solid #D0D0D0"
				>
					{currentPage}
				</Square>
				<Text
					fontSize="14px"
					px="1.5rem"
					color="black"
					whiteSpace="nowrap"
					fontWeight="600"
				>
					{` of ${totalPages}`}
				</Text>
				<Square
					size="30px"
					// borderRadius="2px"
					// boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
					bgColor="white"
					cursor="pointer"
					border="1px solid #D0D0D0"
					onClick={() => paginate("next")}
					ml="5px"
				>
					<Icons iconClass="fa-angle-right" />
					{/* <Icon as={FiChevronRight} color="#323232" fontSize="1.2rem" /> */}
				</Square>
			</Flex>

			{/* <Text fontSize="14px" color="black" ml="1rem" whiteSpace="nowrap">
				{`${data.size || 0} items`}
			</Text> */}
		</Flex>
	);
}

export default Pagination;
