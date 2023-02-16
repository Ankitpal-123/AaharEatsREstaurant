import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";

import DishListItem from "../../components/DishListItem";
import { DataStore } from "aws-amplify";

import { Restaurant, Dish } from "../../models";
import Header from "./Header";
import styles from "./styles";

const RestorentDeatilsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Restaurant, id).then(setRestaurant);
  }, [id]);

  useEffect(() => {
    if (!restaurant?.id) {
      return;
    }
    DataStore.query(Dish, (c) => c.restaurantID.eq(restaurant.id)).then(
      setDishes
    );
  }, [restaurant?.id]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color="gery" />;
  }

  console.log(restaurant);
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        onPress={navigation.goBack}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      ></Ionicons>
    </View>
  );
};

export default RestorentDeatilsScreen;
