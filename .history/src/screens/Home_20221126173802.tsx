import { useState } from "react";
import { HStack, Text, VStack, FlatList, Heading } from "native-base";

import { Header } from "@components/Header";
import { Group } from "@components/Group";
import { Exercise } from "@components/Exercise";

export function Home() {
  const [groups, setGroups] = useState(["costas", "perna", "bíceps", "ombro"]);
  const [exercises, setExercises] = useState([
    "Puxada Frontal",
    "Remada Curvada",
    "Remada Unilateral",
    "Levantamento Terra",
  ]);
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
      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Exercise />}
        />
      </VStack>
    </VStack>
  );
}
