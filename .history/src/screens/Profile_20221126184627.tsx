import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Heading, Text, Center, ScrollView, Skeleton } from "native-base";
import React from "react";

export function Profile() {
  const PHOTO_SIZE = 33
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <Skeleton 
            w={PHOTO_SIZE}
            h={PHOTO_SIZE}
            rounded='full'
            startColor='gray.300'
            endColor='gray.400'
          />
          <UserPhoto
            source={{ uri: "https://github.com/guilhermecardoso93.png" }}
            alt=""
            size={70}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
