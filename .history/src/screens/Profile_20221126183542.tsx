import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Heading, Text, Center, ScrollView } from "native-base";
import React from "react";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: "https://github.com/guilhermecardoso93.png" }}
            alt=""
            size={100}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
