import { Header } from "@components/Header";
import { Center, Text } from "native-base";

export function Home() {
  return (
    <Center flex={1}>
      <Header/>
      <Text>Home</Text>
    </Center>
  );
}
