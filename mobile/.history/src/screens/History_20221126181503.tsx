import React, { useState } from "react";
import { VStack, SectionList, Heading, Text } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    
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
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda.
            Vamos treinar hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
