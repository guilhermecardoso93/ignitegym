import { useState } from "react";
import { HStack, Text, VStack, FlatList, Heading } from "native-base";

import {  } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState(["costas", "perna", "bíceps", "ombro"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      0
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
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
      <HStack>
        <Heading>Excercícios</Heading>
        <Text color="gray.200"> 4</Text>
      </HStack>
    </VStack>
  );
}
