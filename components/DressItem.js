import React from "react";
import { Pressable, Text, View, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { incrementQty, decrementQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const dress = [
    {
      id: "1",
      name: "T-shirt",
      image: require("../assets/dressitem/Tshirt.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "2",
      name: "Shorts",
      image: require("../assets/dressitem/shorts.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "3",
      name: "Hoodie",
      image: require("../assets/dressitem/hoodie.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "4",
      name: "Pants",
      image: require("../assets/dressitem/pants.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "5",
      name: "Shirt",
      image: require("../assets/dressitem/shirt.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "6",
      name: "Tops",
      image: require("../assets/dressitem/woman-clothes.png"),
      quantity: 0,
      price: 10,
    },
    {
      id: "7",
      name: "Blanket",
      image: require("../assets/dressitem/blanket.png"),
      quantity: 0,
      price: 10,
    },
  ];

  const renderItem = ({ item }) => {
    const cartItem = cart.find((c) => c.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <Pressable
        style={{
          margin: 15,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        key={item.id}>
        <Image source={item.image} style={{ width: 70, height: 70 }} />
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
        {cartItem ? (
          <>
            <Pressable
              onPress={() => {
                dispatch(decrementQuantity(item));
                dispatch(decrementQty(item));
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}>
                -
              </Text>
            </Pressable>
            <Text
              style={{
                fontSize: 19,
                color: "#088F8F",
                paddingHorizontal: 8,
                fontWeight: "600",
              }}>
              {quantity}
            </Text>
            <Pressable
              onPress={() => {
                dispatch(incrementQuantity(item));
                dispatch(incrementQty(item));
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#088F8F",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}>
                +
              </Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={addItemToCart} style={{ width: 60 }}>
            <Text
              style={{
                borderColor: "gray",
                borderRadius: 4,
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                padding: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}>
              Add
            </Text>
          </Pressable>
        )}
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
      <View>
        <FlatList
          data={dress}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          vertical
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DressItem;
