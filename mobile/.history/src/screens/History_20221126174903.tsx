import React, { useState } from "react";
import { HStack, Text, VStack, FlatList, Center, Heading } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
  return (
    <Center flex={1}>
      <ScreenHeader />
    </Center>
  );
}
