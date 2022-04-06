import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/pages/HomeScreen";
import { NotificationsScreen } from "./src/pages/NotificationsScreen";
import { CalculatorScreen } from "./src/pages/CalculatorScreen";
import { CrudScreen } from "./src/pages/CrudScreen";
import { FlatList } from "react-native-gesture-handler";
import { FlatListScreen } from "./src/pages/FlatListScreen";
import { SpeechScreen } from "./src/pages/SpeechScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="CRUD" component={CrudScreen} />
        <Drawer.Screen name="Flat List" component={FlatListScreen} />
        <Drawer.Screen name="Speech" component={SpeechScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
