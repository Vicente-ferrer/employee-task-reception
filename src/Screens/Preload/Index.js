import { Text, View } from "react-native";
import React, { Component, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PreloadScreen = () => {
  useEffect(() => {
    const SingUser = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        navigation.navigate("Home_Screen");
      } else {
        navigation.navigate("Login_Screen");
      }
    };
    SingUser();
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      <Text>PreloadScreen</Text>
    </View>
  );
};

export default PreloadScreen;
