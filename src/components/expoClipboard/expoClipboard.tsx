import Clipboard from "@react-native-clipboard/clipboard";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ExpoClipboard = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = () => {
    Clipboard.setString("Mega Mega");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={copyToClipboard}>
          <Text>Click here to copy to Clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchCopiedText}>
          <Text>View copied text</Text>
        </TouchableOpacity>

        <Text style={{}}>{copiedText}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default ExpoClipboard;
