import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerBtn}>
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />

        <TouchableOpacity onPress={() => navigation.navigate("Home_Screen")}>
          <Text style={Styles.btnBack}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.btnPrazo}>Aumentar prazo</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.txtDetail}>
        <Text>Tem tarefa não zé kkkkkk</Text>
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
    height: "100%",
    backgroundColor: "#FFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnBack: {
    fontSize: 18,
    marginLeft: 15,
    color: "#FFFFFF",
  },
  btnPrazo: {
    fontSize: 18,
    marginRight: 15,
    color: "#FFFFFF",
  },
});
export default DetailsScreen;
