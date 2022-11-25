import { createNativeStackNavigator,NativeStackNavigationProp  } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  signIn : undefined;
  signup : undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>; 

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  );
}
