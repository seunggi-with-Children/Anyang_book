import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Library from "../screens/Library";
import L_Check from "../screens/L_Check";
import SeatNavigation from "./SeatNavigation";

const LibraryNavigation = createStackNavigator({
  Library: { screen: Library, navigationOptions: { title: "Library" } },
  L_Reservation: {
    screen: SeatNavigation,
    navigationOptions: { title: "L_Reservation" }
  },
  L_Check: { screen: L_Check, navigationOptions: { title: "L_Check" } }
});
export default createAppContainer(LibraryNavigation);
