import React from "react";
import { TouchableOpacity } from "react-native";
import {
  VStack,
  Text,
  Center,
  Heading,
  Icon,
  HStack,
  Image,
  Box,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSVG from "@assets/repetitions.svg";

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
        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada Vertical
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <VStack p={8}>
        <Image
          w="full"
          h={80}
          source={{
            uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
          }}
          rounded="lg"
          alt=""
          mb={3}
          resizeMode="cover"
          overflow="hidden"
        />
        <Box bg='gray.600'  rounded="md" pb={4} px={4}>
          <HStack
            mb={6}
            mt={5}
            alignItems="center"
            justifyContent="space-around"
          >
            <HStack>
              <SeriesSvg />
              <Text color="gray.200" ml={2}>
                3 Series
              </Text>
            </HStack>
            <HStack>
              <RepetitionsSVG />
              <Text color="gray.200" ml={2}>
                3 Repetições
              </Text>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
}
