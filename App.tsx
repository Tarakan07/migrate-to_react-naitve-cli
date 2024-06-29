/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { ExpoFont, ExpoDevice } from "./src/components";
const Stack = createStackNavigator();
function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name={"Main screen"} component={MainScreen} />

              <Stack.Screen name={"Expo font"} component={ExpoFont} />
              <Stack.Screen name={"Expo device"} component={ExpoDevice} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
const MainScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Expo font");
        }}
      >
        <Text>Expo font</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Expo device");
        }}
      >
        <Text>Expo device</Text>
      </TouchableOpacity>
    </View>
  );
};
// "expo-font": "~11.10.3",++++++++++++
// "expo-device": "~5.9.3",

// "expo-apple-authentication": "~6.3.0",
// "expo-application": "~5.8.3",
// "expo-blur": "~12.9.2",
// "expo-build-properties": "~0.11.1",
// "expo-clipboard": "~5.0.1",
// "expo-constants": "~15.4.5",
// "expo-file-system": "~16.0.8",
// "expo-haptics": "~12.8.1",
// "expo-image-picker": "~14.7.1",
// "expo-localization": "~14.8.3",
// "expo-location": "~16.5.5",
// "expo-notifications": "~0.27.6",
// "expo-sharing": "~11.10.0",
// "expo-splash-screen": "~0.26.4",
// "expo-status-bar": "~1.11.1",
// "expo-system-ui": "~2.9.3",
// "expo-task-manager": "~11.7.3",
// "expo-tracking-transparency": "~3.3.0",
