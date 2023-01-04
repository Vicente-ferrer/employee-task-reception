import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";

const LoginScreen = () => {
  return (
    <SafeAreaView style={Styles.Conteiner}>
      <View>
        <Text> Tela de Login</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Conteiner: {
    backgroundColor: "#FFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "15%",
    marginTop: "16%",
  },
});
export default LoginScreen;
