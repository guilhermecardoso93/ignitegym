import { HStack, Text, Heading, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function Header() {
  return (
    <HStack 
      bg="gray.600" 
      pt={16} pb={5} 
      px={8} 
      alignItems="center"
    >
      <UserPhoto 
        size={16}
        source={{uri: 'https://github.com/guilhermecardoso93.png'}}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md">
          Guilherme Cardoso
        </Heading>
      </VStack>
    </HStack>
  );
}
