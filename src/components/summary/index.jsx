import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AddTransactions from "../addTransactions";
import TransactionChartSummary from "../chart";

export default function Summary({
    onClose,
    isOpen,
    totalExpense,
    totalIncome,
}) {
    return (
        <Box
            p="6"
            border="1px solid"
            borderColor="blue.100"
            overflow="hidden"
            borderRadius="10px"
            bg="white"
            display="flex"
            mt="28px"
        >
            <Flex
                w="full"
                justifyContent="center"
                alignItems="center"
                flexDirection={{ base: "column", lg: "row" }}
            >
                <Flex
                    flex={1}
                    w="full"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-evenly"
                    mr="2"
                >
                    <Heading size="md" mb="4" color="gray.600">
                        Balance is ₦ {totalIncome - totalExpense}
                    </Heading>
                    <Flex
                        justifyContent="space-evenly"
                        alignItems="center"
                        bg="gray.50"
                        w="full"
                        h="100px"
                        border="1px solid"
                        borderColor="blue.100"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="10px"
                    >
                        <Flex flexDirection="column">
                            <Heading color="gray.700">₦ {totalIncome.toLocaleString()}</Heading>
                            <Text color="gray.600">Total Income</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        justifyContent="space-evenly"
                        alignItems="center"
                        bg="gray.50"
                        w="full"
                        h="100px"
                        border="1px solid"
                        borderColor="blue.100"
                        borderBottomRightRadius="10px"
                        borderBottomLeftRadius="10px"
                    >
                        <Flex flexDirection="column">
                            <Heading color="gray.700">₦ {totalExpense.toLocaleString()}</Heading>
                            <Text color="gray.600">Total Expense</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    flex={1}
                    mt="10"
                    width="300px"
                    height="300px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TransactionChartSummary
                        expense={totalExpense}
                        income={totalIncome}
                    />
                </Box>
            </Flex>
            <AddTransactions onClose={onClose} isOpen={isOpen} />
        </Box>
    );
}
