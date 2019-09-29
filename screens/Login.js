import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require("C:UserswnstjOneDrive바탕 화면/book_taxi/screens/anyang.png")} />
    </View>
    <View style={styles.body}>
      <View>
        <View style={styles.contant}>
          <Text style={styles.id}>아이디</Text>
          <TextInput style={styles.inputText} placeholder="아이디"></TextInput>
        </View>
        <View>
          <View style={styles.contant}>
            <Text style={styles.pass}>비밀번호</Text>
            <TextInput style={styles.inputText} placeholder="비밀번호"></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.footer}>
      <View style={styles.join}>
        <TouchableOpacity onPress={() => navigation.navigate("Join")}>
          <Text style={styles.join}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.serchID}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchID")}>
          <Text style={styles.searchID}>아이디 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.serchPass}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchPass")}>
          <Text style={styles.searchPass}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#def3f8"
  },
  header: {
    //flex: 1,
    height: "30%",
    backgroundColor: "white"
  },
  body: {
    height: "30%",
    flexDirection: "row",
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
    //paddingBottom: 30,
    marginRight: 25,
    //backgroundColor: "white"
    marginTop: 30
  },
  contant: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15
  },
  inputText: {
    width: "40%",
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    textAlign: "center",
    width: "50%"
  },
  id: {
    fontSize: 20,
    width: 80
  },
  pass: {
    fontSize: 20,
    width: 80
  },
  button: {
    backgroundColor: "#4561eb",
    height: 90,
    width: 90,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 23,
    color: "white"
  },
  footer: {
    flexDirection: "row",
    // height: 50,
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  join: {
    fontSize: 18,
    textDecorationLine: "underline"
  },
  searchID: {
    fontSize: 18,
    marginLeft: 15,
    textDecorationLine: "underline"
  },
  searchPass: {
    fontSize: 18,
    marginLeft: 15,
    textDecorationLine: "underline"
  }
});
