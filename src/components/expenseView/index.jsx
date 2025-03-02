import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ type, data }) {
  const isExpense = type === "expense";

  return (
    <Box
      flex={1}
      w="full"
      bg="white"
      mr="4"
      mt="10"
      p="5"
      pb="4"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="12"
    >
      {/* Header with dynamic color */}
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md" color={isExpense ? "red.700" : "blue.700"}>
          {isExpense ? "Expense" : "Income"}
        </Heading>
      </Flex>

      {/* List of Transactions */}
      {data.map((item, index) => (
        <Flex
          key={index}
          bg={isExpense ? "red.50" : "blue.50"}
          mt="4"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid"
          borderColor={isExpense ? "red.100" : "blue.100"}
          p="4"
          borderRadius="8"
        >
          <Flex alignItems="center">
            <Text ml="3" fontWeight="bold" color="gray.600">
              {item.description}
            </Text>
          </Flex>
          {/* Format numbers with commas */}
          <Text fontWeight="bold" color={isExpense ? "red.600" : "blue.600"}>
          ₦ {Number(item.amount).toLocaleString("en-NG")}


          </Text>
        </Flex>
      ))}
    </Box>
  );
}
