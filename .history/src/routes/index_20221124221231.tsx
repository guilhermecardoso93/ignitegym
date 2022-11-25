import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme } from 'native-base';
import { AuthRoutes } from "./auth.routes";

export function Routes () {
  const nativeBaseTheme = useTheme()
  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  )
}