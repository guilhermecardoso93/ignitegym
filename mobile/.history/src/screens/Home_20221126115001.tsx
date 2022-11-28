import { VStack, HStack } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <Header />
      
      <HStack>
        <Group name="costa" />
        <Group name="perna" />
        <Group name="ombro" />
      </HStack>
    </VStack>
  );
}
