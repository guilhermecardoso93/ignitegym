import React, { useState } from "react";
import { HStack, Text, VStack, FlatList, SectionList, Heading } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada Frontal", "Ramada Unilatarel"],
    },
    {
      title: "27.08.22",
      data: ["Puxada Frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercício" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={6}
      />
    </VStack>
  );
}
