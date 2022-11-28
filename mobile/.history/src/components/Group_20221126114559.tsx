import { HStack, Text, Pressable, IPressableProps } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

type Props = IPressableProps & {
  name: string;
}

export function Group({ name, ...rest } : Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      {...rest} 
    >
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