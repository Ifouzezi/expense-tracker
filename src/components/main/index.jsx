import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";

export default function Main() {
 
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"red.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
      </Flex>

    </Flex>
  );
}