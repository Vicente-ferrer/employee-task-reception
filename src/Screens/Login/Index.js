import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/auth";

const LoginScreen = () => {
  const [id, setid] = useState("");
  const [password, setPassword] = useState(null);
  const { SignIn } = useContext(AuthContext);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Login_Screen");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [navigation])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>

      <TextInput
        style={styles.input}
        value={id}
        onChangeText={(text) => setid(text)}
        placeholder="CPF"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="SENHA"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          SignIn(id, password);
          navigation.navigate("Home_Screen");
        }}
      >
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 20,
    marginLeft: 40,
    width: "80%",
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#D90429",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 14,
  },
});

export default LoginScreen;
