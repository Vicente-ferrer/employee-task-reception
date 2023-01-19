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
<<<<<<< HEAD
}

//qualquer coisa dnv
=======
};

export default App;
>>>>>>> 9bbd964d9673424ad11500aa1e6b29a0f7f07790
