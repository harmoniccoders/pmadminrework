import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface ReportProps {
  label: string;
  value: any;
}
export const ReportLabel = ({ label, value }: ReportProps) => {
  return (
    <Box w="full">
      <Text fontSize=".8rem" pl="0rem">
        {label}
      </Text>
      <Text
        fontSize="1rem"
        fontWeight="semibold"
        border="1px solid"
        borderColor="gray.400"
        w="full"
        p=".5rem 1rem"
      >
        {value}
      </Text>
    </Box>
  );
};
