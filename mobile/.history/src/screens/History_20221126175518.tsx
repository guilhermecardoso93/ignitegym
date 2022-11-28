import React, { useState } from "react";
import { HStack, Text, VStack, FlatList, Center, Heading } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercicio'/>
      <HistoryCard />
    </VStack>
  );
}
