import React, { useState } from "react";
import { StyleSheet, SafeAreaView, SectionList, StatusBar } from "react-native";
import { HStack, Text, VStack, FlatList, Center, Heading } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [ exercises, setExercises ] = useState([
    {
      title: "26.08.22",
      data: ["Puxada Frontal", "Ramada Unilatarel"]
    },
    {
      title: "27.08.22",
      data: ["Puxada Frontal"]
    },
    ])



  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercicio'/>

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
      />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
}
