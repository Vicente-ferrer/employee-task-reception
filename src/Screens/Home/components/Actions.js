import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import axios from "../../../Config";
//cancel actions screen and task time extension
const ActionModal = ({ route }) => {
  const idTask = route.params.data.id;
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [reason, setReason] = useState("");
  const [reason2, setReason2] = useState("");

  const DeleteTask = async (reason) => {
    const Id = await AsyncStorage.getItem("userId");
    const managerId = await AsyncStorage.getItem("managerId");

    try {
      await axios.post(`email/request-delete/${managerId}/${Id}/${idTask}`, {
        reason: reason,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ExtendTask = async (reason2) => {
    const Id = await AsyncStorage.getItem("userId");
    const managerId = await AsyncStorage.getItem("managerId");
    try {
      await axios.post(
        `email/request-extend-time/${managerId}/${Id}/${idTask}`,
        {
          reason: reason2,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: "14%", marginLeft: 5 }}>
        <Ionicons size={40} name="arrow-back" onPress={() => navigation.pop()}>
          {" "}
        </Ionicons>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.modal}
          onPress={() => setModal2Visible(true)}
        >
          <Text>Aumentar prazo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modal}
          onPress={() => setModalVisible(true)}
        >
          <Text>Cancelar tarefa</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TextInput
              style={styles.input}
              placeholder="ex: o trabalho está dificil..."
              value={reason}
              onChangeText={setReason}
            />
            <TouchableOpacity
              style={styles.modal}
              onPress={() => {
                DeleteTask(reason);
                alert("Solicitação enviada");
                setModalVisible(false);
              }}
            >
              <Text>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal}
              onPress={() => setModalVisible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modal2Visible}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TextInput
              style={styles.input}
              placeholder="ex: Preciso de um prazo maior..."
              value={reason2}
              onChangeText={setReason2}
            />
            <TouchableOpacity
              style={styles.modal}
              onPress={() => {
                ExtendTask(reason2);
                alert("Solicitação enviada");
                setModal2Visible(false);
              }}
            >
              <Text>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal}
              onPress={() => setModal2Visible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 15,
    borderRadius: 10,
  },
  input: {
    width: "80%",
    height: "9%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
});

export default ActionModal;
