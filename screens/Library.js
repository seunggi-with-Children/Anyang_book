import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("L_Reservation")}>
      <Text>좌석 예약하기</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("L_Check")}>
      <Text>좌석 확인하기</Text>
    </TouchableOpacity>
  </>
);
