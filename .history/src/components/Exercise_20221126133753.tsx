import { Heading, HStack, Image, VStack, Text } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {};

export function Exercise({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack>
        <Image
          source={{
            uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
          }}
          alt=""
          w={16}
          h={16}
          rounded="md"
        />
        <VStack>
          <Heading color="white" fontSize="lg">
            Remada Unilaretal
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
