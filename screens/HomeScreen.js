import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Carousels from "../components/Carousels";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";

const HomeScreen = () => {
  const services = [
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
      name: "Hoddie",
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

  //cart reducer call
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  // for location
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Location permission not granted");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    // Get address from coordinates using OpenCage Geocoding API
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=2590a55760894b02831b3a7f62541516`
      );
      setAddress(response.data.results[0].formatted);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);
  // calling product reducer
  const product = useSelector((state) => state.product.product);
  // console.log("product array", product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
    // console.log("show ", product);
  }, [dispatch, product, services]);
  useEffect(() => {
    console.log("show ", product);
  }, [product]);

  return (
    // for Android, we use SafeAreaProvider

    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
        <FlatList
          ListHeaderComponent={() => (
            <>
              {/* location and profile */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}>
                <MaterialIcons name="location-on" size={30} color="red" />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      position: "relative",
                      zIndex: 1,
                    }}>
                    Home
                  </Text>
                  {location && (
                    <Text style={{ paddingRight: 72 }}>
                      {address && <Text>{address}</Text>}
                    </Text>
                  )}
                </View>
                <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      position: "relative",
                      zIndex: 1,
                      left: 0,
                    }}
                    source={{
                      uri: "https://lh3.googleusercontent.com/-RnpzrGr1z-w/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgL8i7Pea4iiU-eW2pLtFSAapYEdcg/photo.jpg?sz=46",
                    }}
                  />
                </Pressable>
              </View>
              {/* Search Bar */}
              <View
                style={{
                  padding: 10,
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderWidth: 0.8,
                  borderColor: "638889",
                  borderRadius: 7,
                  height: 40,
                }}>
                <TextInput placeholder="Search for item or more" />
                <AntDesign name="search1" size={20} color="red" />
              </View>
              {/* Image Carosal */}
              <Carousels />
              {/* Services */}
              <Services />
            </>
          )}
          data={services}
          renderItem={({ item }) => <DressItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
