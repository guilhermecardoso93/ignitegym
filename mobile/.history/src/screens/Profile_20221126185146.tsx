import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  VStack,
  Heading,
  Text,
  Center,
  ScrollView,
  Skeleton,
} from "native-base";
import React, { useState } from "react";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
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
          <Heading>Alterar Foto</Heading>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}
