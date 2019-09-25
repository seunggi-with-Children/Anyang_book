import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("SearchPass")}>
      <Text>비밀번호 찾기</Text>
    </TouchableOpacity>
  </>
);
