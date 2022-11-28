import { TouchableOpacity } from "react-native";
import { HStack, Text, Heading, VStack, Icon, Center } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pt={16} pb={6}>
        <Heading color="gray.100" fontSize="md">
          {title}
        </Heading>
    </Center>
  );
}
