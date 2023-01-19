import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import Listjobs from "./components/Listjobs";
import results from "../../Components/Jobfake";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === "") {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.job.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma tarefa"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity style={styles.perfilIcon}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={({ item }) => <Listjobs data={item} />}
          keyExtractor={(item) => item.id}
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
  input: {
    width: "70%",
    height: 50,
    backgroundColor: "#FFF",
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchArea: {
    width: "100%",
    paddingTop: "10%",
    flexDirection: "row",
    alignItems: "center",
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
