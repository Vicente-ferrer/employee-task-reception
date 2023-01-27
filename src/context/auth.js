import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../Config";
import React, { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const SignIn = async (id, password) => {
    try {
      const response = await axios.post("/employee/login", {
        id: id,
        password: password,
      });

      const userId = JSON.stringify(response.data.cnpj);

      AsyncStorage.setItem("userId", userId);

      console.log(response.data);
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
