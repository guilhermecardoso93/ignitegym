import { useState } from "react";
import { VStack, HStack } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";


export function Home() {
  const [groupSelected, setGroupSelected] = useState('costa')


  return (
    <VStack flex={1}>
      <Header />

      <HStack>
        <Group name="costa" isActive={groupSelected === 'costa'}/>
        <Group name="perna" isActive={groupSelected === 'perna'}/>
        <Group name="ombro" isActive={groupSelected === 'ombro'}/>
      </HStack>
    </VStack>
  );
}
