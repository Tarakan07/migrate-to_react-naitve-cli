import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WithGoBack from "../../libs/HOC/withGoBack";
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
export default WithGoBack(ExpoFont);
