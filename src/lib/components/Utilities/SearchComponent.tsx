import {
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import Icons from "./Icons";

function SearchComponent() {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();
	const getSearchedResult = async () => {
		router.push({
			query: {
				search: searchTerm,
			},
		});
	};
	const handleKeyPress = (e: any) => {
		if (e.key === "Enter") {
			getSearchedResult();
		}
	};
	const clearSearch = () => {
		setSearchTerm("");
		router.push({
			query: {
				search: "",
			},
		});
	};
	return (
		<InputGroup alignItems="center" w='330px'>
			<InputLeftElement>
				<Icons iconClass="fa-search" />
			</InputLeftElement>
			<Input
				type="text"
				placeholder="Search"
				height="2.5rem"
				onChange={(e: { target: { value: SetStateAction<string> } }) =>
					setSearchTerm(e.target.value)
				}
				onKeyDown={handleKeyPress}
				value={searchTerm}
				_placeholder={{
					fontSize: "14px",
					fontWeight: 600,
				}}
				border="2px solid black"
				borderRadius="4px"
				boxShadow="0"
				fontSize="14px"
				fontWeight="medium"
				padding="0 3rem"
				color="black !important"
				_focus={{
					borderColor: "unset",
					border: "0",
				}}
			/>
			{searchTerm !== "" && (
				<InputRightElement onClick={clearSearch}>
					<Icons iconClass="fa-times" />
				</InputRightElement>
			)}
		</InputGroup>
	);
}

export default SearchComponent;
