import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import Icons from "./Icons";

interface SearchProps {
  userId?: any;
  border?: boolean;
}
function SearchComponent({ userId, border = true }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const getSearchedResult = async () => {
    if (userId == 0 || userId) {
      router.push({
        query: {
          search: searchTerm,
          userId,
        },
      });
      return;
    }
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
  // console.log({ userId });
  const clearSearch = () => {
    setSearchTerm("");
    if (userId == 0 || userId) {
      router.push({
        query: {
          search: "",
          userId: userId == 0 ? (userId = 1) : userId,
        },
      });
      return;
    }
    router.push({
      query: {
        search: "",
      },
    });
  };
  return (
    <InputGroup alignItems="center" w="40%">
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
        border={border ? "2px solid black" : "none"}
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
