import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  VStack,
  Text,
  Center,
  ScrollView,
  Skeleton,
  Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.600"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/guilhermecardoso93.png" }}
              alt=""
              size={70}
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.600" />
          <Input
            value="guilherme_cardosogui@hotmail.com"
            bg="gray.600"
            isDisabled
          />
        </Center>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2} mt={12}>
            Alterar Senha
          </Heading>
          <Input placeholder="Senha Antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova Senha" bg="gray.600" secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Button title="Atualizar Senha" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
