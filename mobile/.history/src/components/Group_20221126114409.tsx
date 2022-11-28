import { HStack, Text, Pressable } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  name: string;
}

export function Group({ name } : Props) {
  return (
    <Pressable>
      <Text
        color='gray.200'
        textTransform='uppercase'
        fontSize='xs'
        fontWeight='bold'
      >
        {name}
      </Text>
    </Pressable>
  );
}