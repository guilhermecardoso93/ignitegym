import { ScreenHeader } from "@components/ScreenHeader";
import { VStack,  Heading, Text, Center } from "native-base";
import React from "react";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
    </VStack>
  );
}
