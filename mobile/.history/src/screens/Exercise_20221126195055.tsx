import React from "react";
import { VStack, Text, Center, Heading } from "native-base";

export function Exercise() {
  return (
    <VStack flex={1}>
      <Center bg="gray.600" pt={16} pb={6}>
        <Heading color="gray.100" fontSize="xl">
          Puxada Vertical
        </Heading>
    </Center>
    </VStack>
  );
}