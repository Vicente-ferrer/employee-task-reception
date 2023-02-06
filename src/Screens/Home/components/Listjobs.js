import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//function to assist item-by-item display of the to-do list

const Listjobs = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail_Screen", { data: data })}
        style={styles.item}
      >
        <View style={styles.container}>
          <Text style={styles.itemP1}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    backgroundColor: "#D90429",
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
    color: "black",
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default Listjobs;
