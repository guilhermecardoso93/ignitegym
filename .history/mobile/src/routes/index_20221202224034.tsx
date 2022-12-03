import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme, Box } from "native-base";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { colors } = useTheme();
  const { user } = useAuth();

  const theme = DefaultTheme;

  console.log("USUÁRIO LOGADO =>", user);
  
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
