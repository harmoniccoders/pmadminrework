import { Flex, Td, Tr } from "@chakra-ui/react";

function TableNoContentWrapper({ elements }: any) {
  return (
    <Tr w="full" pos="relative" h="50vh">
      <Td pos="absolute" w="100%" h="100%">
        <Flex h="full" justify="center" align="center">
          {elements}
        </Flex>
      </Td>
    </Tr>
  );
}

export default TableNoContentWrapper;
