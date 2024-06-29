import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const WithGoBack = (Screen) => (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginBottom: 50 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
      <Screen {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default WithGoBack;
