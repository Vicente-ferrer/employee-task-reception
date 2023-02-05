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
        if (id) {
          setUserId(id);
          navigation.navigate("Home_Screen");
        } else {
          navigation.navigate("Login_Screen");
        }
      } catch (error) {}
    }
    getUserId();
  }, []);

  return (
    <ActivityIndicator
      size="large"
      color="#00ff00"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></ActivityIndicator>
  );
}
export default Preload;
