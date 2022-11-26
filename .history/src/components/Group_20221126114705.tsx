import { HStack, Text, Pressable, IPressableProps } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = IPressableProps & {
  name: string;
};

export function Group({ name, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overFlow='hidden'
      {...rest}
    >
      <Text
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
