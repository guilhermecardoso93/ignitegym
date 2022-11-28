import { HStack, Text, Heading, VStack } from "native-base";

export function HistoryCard() {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5}>
        <Heading  color='white' fontSize='md' textTransform='capitalize'>Costas</Heading>
        <Text>Puxada Frontal</Text>
      </VStack>
      <Text>08:56</Text>
    </HStack>
  );
}
