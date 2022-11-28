import React from "react";
import { VStack, Text } from "native-base";


import { ScreenHeader } from "@components/ScreenHeader";

export function Exercise() {
  return (
    <VStack flex={1}>
      <ScreenHeader 
        title='Puxada Fontal'
      />
    </VStack>
  );
}
