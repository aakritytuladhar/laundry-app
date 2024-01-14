// rnfes
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your Location"
  );
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    // checking wheather the location is on or off
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Sevice is not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServiceEnabledlocationServiceEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    // permission to enable the location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the Location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    // provide latitude and longitude of the current location
    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);
    if (coords) {
      // destructuring
      const { latitude, longitude } = coords;
      // reverse fun is used to get exact location
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(response);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
        console.log(address);
      }
    }
  };
  return (
    <SafeAreaView>
      <Text>{displayCurrentAddress}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
