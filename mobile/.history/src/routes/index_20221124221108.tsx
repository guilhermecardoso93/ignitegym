import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes () {
  const theme = DefaultTheme
  theme.colors.background = 'gray.700'

  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  )
}