import { useState } from "react";
import { VStack, HStack } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <Header />

      <HStack>
        <Group
          name="costa"
          onPress={() => setGroupSelected("costa")}
          isActive={groupSelected === "costa"}
        />
        <Group
          name="perna"
          onPress={() => setGroupSelected("perna")}
          isActive={groupSelected === "perna"}
        />
        <Group
          name="ombro"
          onPress={() => setGroupSelected("ombro")}
          isActive={groupSelected === "ombro"}
        />
      </HStack>
    </VStack>
  );
}
