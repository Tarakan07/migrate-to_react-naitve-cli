import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
const ExpoFont = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
        }}
      >
        Custom font1
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "400",
          fontFamily: "PlaywriteMX-Light",
        }}
      >
        My font1
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default ExpoFont;
