import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { styles, background } from './styles';


export function PerfilScreen() {
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
            uri:
              'https://www.diariodebalsas.com.br/images/96263d430771ead130290ea6c32290d4.jpg',
            }}
          >
            <Avatar.Accessory size={45} />
          </Avatar>

          <Text style={styles.nameText}>Manoel Gomes</Text>    

        </View>
        

        <Text style={styles.boxText}>Seu E-mail</Text>
        <View style={styles.boxStyle}>
            <Text style={styles.TextInBox}>ManoelGomes@hotmail.com</Text>
        </View>

        <Text style={styles.boxText}>Data de Nascimento</Text>
        <View style={styles.boxStyle}>
        <Text style={styles.TextInBox}>02/12/1969</Text>
        </View>


        <Text style={styles.boxText}>sla</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.TextInBox}>Ela É Muito Vagabunda</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textButton}>SAIR</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
