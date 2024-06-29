import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WithGoBack from "../../libs/HOC/withGoBack";
import DeviceInfo from "react-native-device-info";
const ExpoDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    brand: "",
    deviceName: "",
    deviceType: "",
    isDevice: "",
    modelName: "",
    osName: "",
    buildNumber: "",
  });

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const brand = DeviceInfo.getBrand();
      const deviceName = await DeviceInfo.getDeviceName();
      const deviceType = DeviceInfo.getDeviceType();
      const isDevice = DeviceInfo.isEmulator() ? "false" : "true";
      const modelName = DeviceInfo.getModel();
      const osName = DeviceInfo.getSystemName();
      const buildNumber = DeviceInfo.getBuildNumber();

      setDeviceInfo({
        brand,
        deviceName,
        deviceType,
        isDevice,
        modelName,
        osName,
        buildNumber,
      });
    };

    fetchDeviceInfo();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Brand: {deviceInfo.brand}</Text>
      <Text>Device Name: {deviceInfo.deviceName}</Text>
      <Text>Device Type: {deviceInfo.deviceType}</Text>
      <Text>Is Device: {deviceInfo.isDevice}</Text>
      <Text>Model Name: {deviceInfo.modelName}</Text>
      <Text>OS Name: {deviceInfo.osName}</Text>
      <Text>Build Number: {deviceInfo.buildNumber}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default WithGoBack(ExpoDevice);
