import { useState } from "react";
import { VStack, HStack, FlatList } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState(["costas", "perna", "bíceps", "ombro"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <Header />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />
    </VStack>
  );
}
