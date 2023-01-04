import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import AppRoutes from "./src/Routes/Index";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppRoutes />
    </SafeAreaView>
  );
}

//qualquer coisa dnv