import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navgation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navgation.navigate("Home_Screen");
        }}
      >
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
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
