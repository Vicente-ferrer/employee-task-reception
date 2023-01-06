import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const Listjobs = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.container}>
        <Text style={styles.itemP1}>{data.job}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D90429",
    width: "100%",
    height: 50,
    borderRadius: 10,
  },

  item: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    borderBottomColor: "#444",
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 22,
    color: "#FFFF",
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default Listjobs;
