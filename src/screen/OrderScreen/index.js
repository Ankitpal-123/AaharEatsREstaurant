import { View, Text, FlatList, StyleSheet } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";
import React from "react";

const OrderScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;
