import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../Config";
import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userCpf, setUserCpf] = useState();
  const [userHiredate, setUserHiredate] = useState();

  const SignIn = async (id, password) => {
    try {
      const response = await axios.post("employee/login", {
        id: id,
        password: password,
      });
      const userId = JSON.stringify(response.data.employee.cpf);
      const managerId = JSON.stringify(response.data.manager_id);
      AsyncStorage.setItem("managerId", managerId);
      AsyncStorage.setItem("userId", userId);

      console.log(managerId);
    } catch (error) {
      console.error(error);
    }
  };
  const UserInfo = async () => {
    const id = await AsyncStorage.getItem("userId");

    try {
      const response = await axios.get(`employee/find-by-id/${id}`);
      setUserName(response.data.ename);
      setUserEmail(response.data.eemail);
      setUserCpf(id);
      setUserHiredate(response.data.hireDate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ SignIn, UserInfo, userName, userEmail, userCpf, userHiredate }}
    >
      {children}
    </AuthContext.Provider>
  );
};
