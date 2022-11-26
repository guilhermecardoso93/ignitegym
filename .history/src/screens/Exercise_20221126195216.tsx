import React from "react";
import { TouchableOpacity } from "react-native";
import { VStack, Text, Center, Heading, Icon } from "native-base";
import { Feather } from "@expo/vector-icons"

export function Exercise() {
  return (
    <VStack flex={1}>
      <VStack bg="gray.600" pt={16} pb={6}>
        <TouchableOpacity>
          <Icon 
            as={Feather}
          />
        </TouchableOpacity>
        <Heading color="gray.100" fontSize="xl">
          Puxada Vertical
        </Heading>
    </VStack>
    </VStack>
  );
}