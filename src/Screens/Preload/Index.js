import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
function Preload() {
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUserId() {
      try {
        const id = await AsyncStorage.getItem("userId");
        if (id !== null) {
          setUserId(id);
          navigation.navigate("Home_Screen");
        }
      } catch (error) {
        navigation.navigate("Login_Screen");
      }
    }
    getUserId();
  }, []);

  return (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></ActivityIndicator>
  );
}
export default Preload;
