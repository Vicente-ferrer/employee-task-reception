import { StyleSheet } from "react-native";

export const background = {
  uri: "https://img.freepik.com/free-vector/white-gray-background-with-diagonal-lines-pattern_1017-25100.jpg?w=900&t=st=1673066801~exp=1673067401~hmac=ff05767c245891334213c3bd9127b95ce2b63f9d638b098a17d23b408228427a",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: "#D90429",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 45,
  },
  boxStyle: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 15,
    height: 45,
    width: 365,
    margin: 5,
    marginBottom: 20,
    borderColor: "#D90429",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  buttonStyle: {
    backgroundColor: "#8D99AE",
    width: 150,
    height: 48,
    borderRadius: 25,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 25,
  },
  nameText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    marginTop: 20,
    color: "#303030",
  },
  ProfileText: {
    fontFamily: "Roboto_900Black",
    fontSize: 25,
    marginTop: 30,
    color: "#303030",
  },
  boxText: {
    fontFamily: "Roboto_900Black",
    fontSize: 15,
    marginStart: 18,
  },
  TextInBox: {
    fontFamily: "Roboto_700Bold",
    fontSize: 13,
    paddingLeft: 10,
    color: "#808080",
  },
  textButton: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    color: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
