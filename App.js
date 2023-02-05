import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/Routes/Index";
import { AuthProvider } from "./src/context/auth";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const App = () => {
  const [fontsLoad] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
