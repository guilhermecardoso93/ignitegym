import React from "react";
import { TouchableOpacity } from "react-native";
import { VStack, Text, Center, Heading, Icon, HStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack bg="gray.600" px={8} pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack>
          <Heading color="gray.100" fontSize="lg">
          Puxada Vertical
         </Heading>
         <HStack>
          <Text color="gray.200" ml={1} textTransform='capitalize'>Costas</Text>
         </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
