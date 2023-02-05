import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params.data;

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerBtn}>
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.pop()}
        >
          <Ionicons size={40} name="arrow-back"></Ionicons>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Action_Screen", { data: data })}
          >
            <Ionicons name="menu-outline" size={50}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.txtDetail}>
        <Text
          style={{
            fontSize: 24,
            marginRight: "62%",
            fontWeight: "bold",
            marginTop: "-50%",
          }}
        >
          Descrição:
        </Text>
        <Text style={{ fontSize: 18, padding: 10, marginTop: 10 }}>
          {data.description}
        </Text>
      </View>
      <View style={Styles.txtInfo}>
        <Text style={{ fontSize: 15, marginTop: "40%" }}>
          Criação: {data.creationDay}
        </Text>

        <Text style={{ fontSize: 15 }}>Finaliza em: {data.finishDay}</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "10%",
    backgroundColor: "red",
  },
  headerBtn: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtDetail: {
    width: "100%",
    height: "50%",
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  txtInfo: {
    width: "100%",
    height: "50%",
    backgroundColor: "#FFFF",
    flexDirection: "column",
  },
  btnBack: {
    fontSize: 18,
    marginLeft: 15,
    color: "black",
  },
});
export default DetailsScreen;
