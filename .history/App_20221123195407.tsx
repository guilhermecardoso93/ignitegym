import { View, Text } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {fontsLoaded ? <Text>Oi </Text> : <View />}
    </View>
  );
}
