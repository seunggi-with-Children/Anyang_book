import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("SearchID")}>
      <Text>아이디 찾기</Text>
    </TouchableOpacity>
  </>
);
