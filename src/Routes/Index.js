import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/Index";
import LoginScreen from "../Screens/Login/Index";
import DetailsScreen from "../Screens/Home/components/DetailJob";
import PreloadScreen from "../Screens/Preload/Index";
import PerfilScreen from "../Screens/Perfil/Index";
import ActionSCreen from "../Screens/Home/components/Actions";
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preload"
        options={{ headerShown: false }}
        component={PreloadScreen}
      />
      <Stack.Screen
        name="Login_Screen"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Home_Screen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Detail_Screen"
        options={{ headerShown: false }}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Perfil_Screen"
        options={{ headerShown: false }}
        component={PerfilScreen}
      />
      <Stack.Screen
        name="Action_Screen"
        options={{ headerShown: false }}
        component={ActionSCreen}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
