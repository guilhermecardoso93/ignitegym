import { TouchableOpacity } from "react-native";
import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  name: string;
}

export function Group({ name } : Props) {
  return (
    <HStack>
      <Text
        color='gray.200'
      >{name}</Text>
    </HStack>
  );
}