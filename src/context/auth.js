import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../Config";
import React, { createContext } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();

  const SignIn = async (id, password) => {
    try {
      const response = await axios.post("/login", {
        id: id,
        password: password,
      });
      const userId = JSON.stringify(response.data.cnpj);
      AsyncStorage.setItem("userId", userId);
      console.log(userId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ SignIn }}>{children}</AuthContext.Provider>
  );
};
