import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import Listjobs from "./components/Listjobs";
import axios from "../../Config";
const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("job/get/all");
      setTasks(response.data);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <Text style={styles.txtWelcome}>Seja bem vindo(a)</Text>
        <TouchableOpacity style={styles.perfilIcon}>
          <AntDesign name="user" size={30} color="black" />
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
    fontSize: 18,
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
