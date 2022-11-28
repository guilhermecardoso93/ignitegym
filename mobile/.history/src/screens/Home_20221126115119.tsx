import { VStack, HStack } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <Header />

      <HStack>
        <Group name="costa" isActive/>
        <Group name="perna" isActive={false}/>
        <Group name="ombro" isActive={false}/>
      </HStack>
    </VStack>
  );
}
