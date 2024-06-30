import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  TouchableOpacity,
} from "react-native";
import WithGoBack from "../../libs/HOC/withGoBack";
const ExpoHaptics = () => {
  const [isVibrate, setVibrate] = useState(false);
  useEffect(() => {
    if (isVibrate) Vibration.vibrate(15000);
    else Vibration.cancel();
    return () => Vibration.cancel();
  }, [isVibrate]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVibrate((prev) => !prev)}>
        <Text>Brrrrrrrr</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, alignContent: "center" },
});
export default WithGoBack(ExpoHaptics);
