import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/Routes/Index";
import { AuthProvider } from "./src/context/auth";
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
