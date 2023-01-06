import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import AppRoutes from "./src/Routes/Index";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppRoutes />
    </SafeAreaView>
  );
}
