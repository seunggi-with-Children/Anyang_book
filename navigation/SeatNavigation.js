import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ARI_one from "../screens/ARI_one";
import L_Reservation from "../screens/L_Reservation";
import ARI_two from "../screens/ARI_two";
import Suri from "../screens/Suri";
import { createBottomTabNavigator } from "react-navigation-tabs";

const AriNavigation = createStackNavigator({
  L_Reservation: {
    screen: L_Reservation,
    navigationOptions: { title: "L_Reservation" }
  },
  ARI_one: {
    screen: createBottomTabNavigator({ ARI_one, ARI_two, Suri }),
    navigationOptions: { title: "ARI_one" }
  },
  ARI_two: {
    screen: createBottomTabNavigator({ ARI_one: ARI_one, ARI_two, Suri }),
    navigationOptions: { title: "ARI_two" }
  },
  Suri: {
    screen: createBottomTabNavigator({ ARI_one: ARI_one, ARI_two, Suri }),
    navigationOptions: { title: "Suri" }
  }
});

export default createAppContainer(AriNavigation);
