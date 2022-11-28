import { VStack } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <Header />
      <Group 
        name="costa"
      />
      <Group 
        name="perna"
      />
      <Group 
        name="ombro"
      />
    </VStack>
  );
}
