import React from "react";
import { VStack, Image, Text, Center, Heading } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Input";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Foto de pessoas treinando na academia"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="gray.100" mb={6} fontFamily="heading">
          Acesse sua Conta
        </Heading>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>
      </Center>
    </VStack>
  );
}