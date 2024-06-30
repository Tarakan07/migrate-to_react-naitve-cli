import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
import WithGoBack from "../../libs/HOC/withGoBack";
import Share, { ShareOptions } from "react-native-share";
import RNFS from "react-native-fs";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6xwjnppV9SVGxMCInVgw5IjExUmqPznozQ&s";

const ExpoSharingFileSystem = () => {
  const shareOptions: ShareOptions = {
    title: "Это мое поделиться",
    message: "Это мое поделиться лалала",
    url: imageUrl,
  };

  const handleShare = async () => {
    try {
      await Share.open(shareOptions);
    } catch (err) {
      console.log("Error with handleShare:", err);
    }
  };

  const handleDownload = async () => {
    if (Platform.OS === "android") {
      const androidVersion = Platform.Version;
      if (androidVersion < 30) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission Needed",
            message: "This app needs storage permission to download images",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            "Permission Denied",
            "Storage permission is required to download images"
          );
          return;
        }
      }

      const fileName = imageUrl
        .split("/")
        .pop()
        .replace(/[^a-zA-Z0-9.-]/g, "_");
      const downloadDest = `${RNFS.PicturesDirectoryPath}/${fileName}`;

      try {
        const { promise } = RNFS.downloadFile({
          fromUrl: imageUrl,
          toFile: downloadDest,
        });

        await promise;
        Alert.alert(
          "Download Successful!",
          "Image has been downloaded to your gallery"
        );
      } catch (error) {
        console.error("Download error:", error);
        Alert.alert(
          "Download Failed",
          "An error occurred while downloading the image"
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShare}>
        <Text>ExpoSharing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDownload}>
        <Text>ExpoSharingDownload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default WithGoBack(ExpoSharingFileSystem);
