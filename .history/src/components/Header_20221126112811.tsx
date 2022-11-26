import { HStack, Text, Heading, VStack } from "native-base";

export function Header() {
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <VStack>
        <Text color="gray.100">Olá</Text>
        <Heading color="gray.100">Guilherme Cardoso</Heading>
      </VStack>
    </HStack>
  );
}
