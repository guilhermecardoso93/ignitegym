import { Heading, HStack, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {};

export function Exercise({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        rounded="md"
        p={2}
        pr={4}
        mb={3}
      >
        <Image
          source={{
            uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
          }}
          alt=""
          w={16}
          h={16}
          rounded="md"
          resizeMode="center"
        />
        <VStack ml={4}>
          <Heading color="white" fontSize="lg">
            Remada Unilaretal
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={2} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <TouchableOpacity>
        <Icon
          as={Entypo}
        />
      </TouchableOpacity>
      </HStack>
     
    </TouchableOpacity>
  );
}
