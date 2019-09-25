import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text>로그인</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Join")}>
      <Text>회원가입</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("SearchID")}>
      <Text>아이디 찾기</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("SearchPass")}>
      <Text>비밀번호 찾기</Text>
    </TouchableOpacity>
  </>
);
