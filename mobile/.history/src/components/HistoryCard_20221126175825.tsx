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
      <VStack color='white' fontSize='md' textTransform='capitalize'>
        <Heading>Costas</Heading>
        <Text>Puxada Frontal</Text>
      </VStack>
      <Text>08:56</Text>
    </HStack>
  );
}
