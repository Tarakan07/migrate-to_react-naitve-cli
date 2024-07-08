import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getCurrencies, getLocales } from "react-native-localize";
const ExpoLocalization = () => {
  return (
    <View style={styles.container}>
      <Text>getCurrencies:{JSON.stringify(getCurrencies())}</Text>
      <Text>getLocales:{JSON.stringify(getLocales())}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default ExpoLocalization;
