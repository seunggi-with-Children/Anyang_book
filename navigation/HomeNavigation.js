import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LibraryNavigaton from "./LibraryNavigation";
import T_Make from "../screens/T_Make";
import Home from "../screens/Home";
import T_MNavigation from "./T_MNavigation";

const HomeNavigaton = createStackNavigator({
  Home: { screen: Home, navigationOptions: { title: "Home" } },
  Library: { screen: LibraryNavigaton, navigationOptions: { title: "좌석예약 및 확인 메뉴" } },
  Tayo: { screen: T_MNavigation, navigationOptions: { title: "타요" } }
});

export default createAppContainer(HomeNavigaton);
