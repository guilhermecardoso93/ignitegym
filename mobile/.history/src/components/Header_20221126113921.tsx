import { TouchableOpacity } from "react-native";
import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";

export function Header() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/guilhermecardoso93.png" }}
        alt=''
        size={10}
        mr={4}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md">
          Guilherme Cardoso
        </Heading>
      </VStack>
      <TouchableOpacity>
      <Icon
        as={MaterialIcons}
        name='logout'
        color='gray.200'
        size={7}
      />
      </TouchableOpacity>
    </HStack>
  );
}