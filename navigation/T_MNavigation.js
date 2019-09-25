import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import T_MSetting from "../screens/T_MSetting";
import T_Make from "../screens/T_Make";
import T_Account from "../screens/T_Account";

const T_MNavigation = createStackNavigator({
  Tayo: { screen: T_Make, navigationOptions: { title: "타요" } },
  T_MSetting: { screen: T_MSetting, navigationOptions: { title: "방만들기 세팅" } },
  T_Account: { screen: T_Account, navigationOptions: { title: "계좌등록하기" } }
});

export default createAppContainer(T_MNavigation);
