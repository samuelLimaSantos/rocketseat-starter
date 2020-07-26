import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Product from "./pages/product";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="JSHunt"
          component={Main}
          options={{
            title: "JSHunt",
            headerTitleStyle: {
              textAlign: "center",
            },
            headerStyle: {
              backgroundColor: "#DA552F",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerTitleStyle: {
              textAlign: "center",
            },
            headerStyle: {
              backgroundColor: "#DA552F",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
