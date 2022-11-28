import { useState } from "react";
import { HStack, Text, VStack, FlatList, Heading } from "native-base";

import {} from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";
import { Exercise } from "@components/Exercise";

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
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
      <VStack flex={1} px={8} mb={5}>
      <HStack justifyContent='space-between'>
        <Heading color="gray.200" fontSize="md">
          Exercícios
        </Heading>
        <Text color="gray.200" fontSize="sm">
          4
        </Text>
        <Exercise />
      </HStack>
      </VStack>
    </VStack>
  );
}
