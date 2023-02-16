import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Basket from "../screen/Basket";
import DeshDeatilsScreen from "../screen/DeshDetailScreen";
import HomeScreen from "../screen/HomeScreen";
import OrderDetails from "../screen/OrderDetails";
import { Auth } from "aws-amplify";
import OrderScreen from "../screen/OrderScreen";
import RestorentDeatilsScreen from "../screen/RestorentDetailScreen";
import DishListItem from "../components/DishListItem";
import ProfileScreen from "../screen/ProfileScreen";
import { useAuthContext } from "../context/AuthContex";

import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import {  } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const { dbUser } = useAuthContext();
  return (
    <Stack.Navigator initialRouteName="Home">
      {dbUser ? (
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeSatckNavigator}
        options={{
          tabBarIcon: (color) => (
            <FontAwesome5 name="home" size={24} color="color" />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OredrSatckNavigator}
        options={{
          tabBarIcon: (color) => (
            <MaterialIcons name="list-alt" size={24} color="color" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (color) => (
            <FontAwesome name="user" size={24} color="color" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeSatckNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restorents" component={HomeScreen} />
      <HomeStack.Screen
        name="Restorent"
        component={RestorentDeatilsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DeshDeatilsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};
const OrderStack = createNativeStackNavigator();
const OredrSatckNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Order" component={OrderDetails} />
    </OrderStack.Navigator>
  );
};

export default RootNavigator;
