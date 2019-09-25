import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({ navigation }) => (
  <>
    <Text>안양대 홈페이지</Text>
    <Text>안양대 사이버 강의 홈페이지</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Library")}>
      <Text>열람실 좌석 예약</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Tayo")}>
      <Text>안양대 타요</Text>
    </TouchableOpacity>
  </>
);
