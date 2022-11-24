import { View, Text, StatusBar } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202024",
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Loading />
        {fontsLoaded ? <Text> Oi </Text> :  <Loading />}
      </View>
    </NativeBaseProvider>
  );
}
