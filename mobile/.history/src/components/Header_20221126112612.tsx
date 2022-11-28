import { HStack, Text, Heading, VStack } from "native-base";

export function Header() {
  return (
    <HStack>
      <VStack>
      <Text color="gray.100">Olá</Text>
      <Heading color="gray.100">Guilherme Cardoso</Heading>
      </VStack>
    </HStack>
  );
}
