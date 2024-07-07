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
import ExpoLocalization from "./src/components/expoLocalization/expoLocalization";
import {
  ExpoFont,
  ExpoDevice,
  ExpoSharingFileSystem,
  expoHaptics,
  ExpoImagePicker,
  ExpoClipboard,
  MiniChat,
} from "./src/components";

const Stack = createStackNavigator();
const routes = {
  mainScreen: "mainScreen",
  expoFonts: "expoFonts",
  expoDevice: "expoDevice",
  expoSharing: "expoSharing_fileSystem",
  expoHaptics: "expoHaptics",
  expoImagePicker: "expoImagePicker",
  expoClipboard: "expoClipboard",
  expoLocalization: "expoLocalization",
  //another
  miniChat: "miniChat",
};

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name={routes.mainScreen} component={MainScreen} />

              <Stack.Screen name={routes.expoFonts} component={ExpoFont} />
              <Stack.Screen name={routes.expoDevice} component={ExpoDevice} />
              <Stack.Screen
                name={routes.expoSharing}
                component={ExpoSharingFileSystem}
              />
              <Stack.Screen name={routes.expoHaptics} component={expoHaptics} />
              <Stack.Screen
                name={routes.expoImagePicker}
                component={ExpoImagePicker}
              />
              <Stack.Screen
                name={routes.expoClipboard}
                component={ExpoClipboard}
              />
              <Stack.Screen
                name={routes.expoLocalization}
                component={ExpoLocalization}
              />
              {/* another */}
              <Stack.Screen
                name={routes.miniChat}
                component={MiniChat}
                options={{
                  header: () => null,
                }}
              />
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
      <MyNavigate {...{ navigation, name: routes.expoFonts }} />
      <MyNavigate {...{ navigation, name: routes.expoDevice }} />
      <MyNavigate {...{ navigation, name: routes.expoSharing }} />
      <MyNavigate {...{ navigation, name: routes.expoHaptics }} />
      <MyNavigate {...{ navigation, name: routes.expoImagePicker }} />
      <MyNavigate {...{ navigation, name: routes.expoClipboard }} />
      <MyNavigate {...{ navigation, name: routes.expoLocalization }} />
      <Text style={{ marginVertical: 30 }}>Another hernya</Text>
      <MyNavigate {...{ navigation, name: routes.miniChat }} />
    </View>
  );
};
const MyNavigate = ({ navigation, name }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate(name);
    }}
  >
    <Text>{name}</Text>
  </TouchableOpacity>
);
// "expo-font": "~11.10.3",++++++++++++
// "expo-device": "~5.9.3",
// "expo-sharing": "~11.10.0",
// "expo-file-system": "~16.0.8",
// "expo-haptics": "~12.8.1",
// "expo-image-picker": "~14.7.1",
// "expo-clipboard": "~5.0.1",
// "expo-localization": "~14.8.3",

//-------------------------

// "expo-apple-authentication": "~6.3.0",
// "expo-application": "~5.8.3",
// "expo-blur": "~12.9.2",
// "expo-build-properties": "~0.11.1",
// "expo-constants": "~15.4.5",
// "expo-location": "~16.5.5",
// "expo-notifications": "~0.27.6",
// "expo-splash-screen": "~0.26.4",
// "expo-status-bar": "~1.11.1",
// "expo-system-ui": "~2.9.3",
// "expo-task-manager": "~11.7.3",
// "expo-tracking-transparency": "~3.3.0",
