import { TouchableOpacity } from "react-native";
import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <VStack flex={1}>
        <Heading color="gray.100" fontSize="md">
          {title}
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
