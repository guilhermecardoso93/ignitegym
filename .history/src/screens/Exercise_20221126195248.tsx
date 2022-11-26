import React from "react";
import { TouchableOpacity } from "react-native";
import { VStack, Text, Center, Heading, Icon } from "native-base";
import { Feather } from "@expo/vector-icons"

export function Exercise() {
  return (
    <VStack flex={1}>
      <VStack bg="gray.600" px={8} pt={16} pb={6}>
        <TouchableOpacity>
          <Icon 
            as={Feather}
            name='arrow-left'
            color='green.500'
            size={6}
          />
        </TouchableOpacity>
        <Heading color="gray.100" fontSize="xl">
          Puxada Vertical
        </Heading>
    </VStack>
    </VStack>
  );
}