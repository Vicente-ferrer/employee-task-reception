import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import Listjobs from "./components/Listjobs";
import { AuthContext } from "../../context/auth";
import axios from "../../Config";

const HomeScreen = () => {
  const { UserInfo, userName } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      const id = await AsyncStorage.getItem("userId");
      const response = await axios.get("employee/find-by-id/" + id);

      setTasks(response.data.jobs);
    }
    fetchData();
    UserInfo();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Home_Screen");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [navigation])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <Text style={styles.txtWelcome}>Olá {userName} </Text>
        <TouchableOpacity style={styles.perfilIcon}>
          <AntDesign
            name="user"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Perfil_Screen")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Listjobs data={item} />}
          keyExtractor={(item) => item.id}
          initialNumToRender={8}
        />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D99AE",
  },
  txtWelcome: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
  searchArea: {
    width: "100%",
    height: "18%",
    paddingTop: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#8D99AE",
  },
  perfilIcon: {
    width: 32,
    marginRight: 30,
  },
  list: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFF",
    borderRadius: 20,
  },
});

export default HomeScreen;
