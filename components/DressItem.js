import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const DressItem = () => {
  const dress = [
    {
      id: "1",
      name: "T-shirt",
      image: require("../assets/dressitem/Tshirt.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "2",
      name: "Shorts",
      image: require("../assets/dressitem/shorts.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "3",
      name: "Hoddie",
      image: require("../assets/dressitem/hoodie.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "4",
      name: "Pants",
      image: require("../assets/dressitem/pants.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "5",
      name: "Shirt",
      image: require("../assets/dressitem/shirt.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "6",
      name: "Tops",
      image: require("../assets/dressitem/woman-clothes.png"),
      quatity: 0,
      price: 10,
    },
    {
      id: "7",
      name: "Blanket",
      image: require("../assets/dressitem/blanket.png"),
      quatity: 0,
      price: 10,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          margin: 25,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        key={item.id}>
        <Image
          source={item.image} // Use item.image directly, as it's a local image
          style={{ width: 70, height: 70 }}
        />
        <Text
          style={{
            textAlign: "center",
            width: 83,
            fontSize: 17,
            fontWeight: "500",
          }}>
          {item.name}
        </Text>
        <Text style={{ textAlign: "center", marginRight: 10 }}>
          Rs. {item.price}
        </Text>
        <Pressable style={{ width: 50 }}>
          <Text
            style={{
              textAlign: "center",
              borderColor: "grey",
              borderWidth: 0.8,
              marginVertical: 10,
              color: "#088F8F",
              padding: 5,
              borderRadius: 6,
              fontSize: 17,
              fontWeight: "bold",
            }}>
            Add
          </Text>
        </Pressable>
      </Pressable>
    );
  };
  return (
    <View style={{ padding: 1 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          margin: 5,
          textAlign: "center",
        }}>
        Laundry Item
      </Text>
      <Pressable>
        <View>
          <FlatList
            data={dress} // Pass the 'dress' array as the data prop
            renderItem={renderItem} // Pass the renderItem function
            keyExtractor={(item) => item.id} // Provide a unique key for each item
            vertical
            showsVerticalScrollIndicator={false} // Optional: Add this if you want the list to be horizontal
          />
        </View>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
