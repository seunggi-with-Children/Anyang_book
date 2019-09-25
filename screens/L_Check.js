import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("Library")}>
      <Text>좌석 이동</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Library")}>
      <Text>좌석 연장</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Library")}>
      <Text>좌석 취소</Text>
    </TouchableOpacity>
  </>
);
