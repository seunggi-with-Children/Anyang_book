import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("T_MSetting")}>
      <Text>방 만들기</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("T_Account")}>
      <Text>계좌 등록하기</Text>
    </TouchableOpacity>
  </>
);
