import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("ARI_one")}>
      <Text>아리관 제 1 열람실</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("ARI_two")}>
      <Text>아리관 제 2 열람실</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Suri")}>
      <Text>수리관 열람실</Text>
    </TouchableOpacity>
  </>
);
