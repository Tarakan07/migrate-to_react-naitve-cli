import React, { memo, useCallback, useState } from "react";
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { VisibleImage } from "../../libs/UI";
const ExpoImagePicker = () => {
  const [image, setImage] = useState("");

  const cropAndSave = useCallback((src) => {
    ImagePicker.openCropper({
      mediaType: "photo",
      cropping: true,

      path: src,
      width: 300,
      height: 400,
    })
      .then((croppedImage) => {
        setImage(croppedImage.path);
      })
      .catch((error) => {
        console.log("Error cropping the image: ", error);
      });
  }, []);

  const handleCamera = useCallback(async () => {
    let cameraPerm = await PermissionsAndroid.request(
      "android.permission.CAMERA"
    );

    if (cameraPerm == PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera({
        mediaType: "photo",
        assetRepresentationMode: "compatible",
        quality: 1,
      });

      if (result.assets) {
        cropAndSave(result.assets[0].uri);
      }
    }
  }, []);
  const handleLibrary = useCallback(async () => {
    let cameraPerm = await PermissionsAndroid.request(
      "android.permission.READ_MEDIA_IMAGES"
    );
    if (cameraPerm == PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchImageLibrary({
        mediaType: "photo",
        assetRepresentationMode: "compatible",
        quality: 1,
      });

      if (result.assets) {
        cropAndSave(result.assets[0].uri);
      }
    }
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={handleLibrary}
          style={[
            styles.btn,
            {
              marginBottom: 30,
            },
          ]}
        >
          <Text>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleCamera}>
          <Text>Make Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapImage}>
        <VisibleImage
          style={styles.image}
          source={image}
          defaultImage={<DefaultImage />}
        />
        {image.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setImage("");
            }}
            style={[
              styles.btn,
              {
                borderColor: "red",
                marginTop: 30,
              },
            ]}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderColor: "blue",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapImage: {
    marginTop: 50,
    alignItems: "center",
    width: "100%",
  },

  image: {
    width: "80%",
    height: 350,
  },
});

const DefaultImage = memo(() => {
  return (
    <View
      style={[
        styles.image,
        {
          justifyContent: "center",
          alignItems: "center",
          borderColor: "red",
          borderWidth: 1,
        },
      ]}
    >
      <Text>No have image</Text>
    </View>
  );
});
export default ExpoImagePicker;
