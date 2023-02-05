import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles, background } from "./styles";

import { AuthContext } from "../../context/auth";
const PerfilScreen = () => {
  const navigation = useNavigation();
  const { userName, userEmail, userCpf, userHiredate } =
    useContext(AuthContext);

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.ProfileText}>PERFIL</Text>
        </View>

        <View style={styles.avatar}>
          <Avatar
            size={180}
            rounded
            activeOpacity={0.7}
            source={{
              uri: "https://www.diariodebalsas.com.br/images/96263d430771ead130290ea6c32290d4.jpg",
            }}
          >
            <Avatar.Accessory size={45} />
          </Avatar>

          <Text style={styles.nameText}>{userName}</Text>
        </View>

        <Text style={styles.boxText}>E-mail</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.TextInBox}>{userEmail}</Text>
        </View>

        <Text style={styles.boxText}>Cpf</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.TextInBox}>{userCpf}</Text>
        </View>

        <Text style={styles.boxText}>Data de contratação</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.TextInBox}>{userHiredate}</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default PerfilScreen;
