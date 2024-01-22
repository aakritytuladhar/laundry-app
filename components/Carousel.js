// // rnfes
import { Text, View, ViewPropTypes } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://laundryhouse.net/wp-content/uploads/2019/03/Delivery-laundry-services.jpg",
    "https://www.sapphiresolutions.net/blog/wp-content/uploads/2022/08/Top-10-Laundry-Service-Apps.png",
  ];
  return (
    <View>
      <Text></Text>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotCOlor="#90A4E"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

// const styles = StyleSheet.create({});
