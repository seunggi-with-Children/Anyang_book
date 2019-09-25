import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Join from "../screens/Join";
import SearchID from "../screens/SearchID";
import SearchPass from "../screens/SearchPass";
import HomeNavigation from "./HomeNavigation";

const LoginNavigation = createStackNavigator({
  Login: { screen: Login, navigationOptions: { title: "Login" } },
  Home: { screen: HomeNavigation, navigationOptions: { title: "Home" } },
  Join: { screen: Join, navigationOptions: { title: "Join" } },
  SearchID: { screen: SearchID, navigationOptions: { title: "SearchID" } },
  SearchPass: { screen: SearchPass, navigationOptions: { title: "SearchPass" } }
});

export default createAppContainer(LoginNavigation);
