import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const MiniChat = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const scrollViewRef = useRef(null);
  const offsetScroll = useRef(0);
  Keyboard.addListener("keyboardDidShow", () => {});
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: keyboardHeight + offsetScroll.current,
        animated: false,
      });
    }
  }, [keyboardHeight]);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My header</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
            offsetScroll.current = e.nativeEvent.contentOffset.y;
          }}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          scrollEnabled={true}
          contentContainerStyle={{}}
          scrollIndicatorInsets={{ bottom: 400 }}
        >
          {new Array(40).fill("hi").map((e, index) => {
            return <Item key={index} index={index} />;
          })}
        </ScrollView>
        <View style={[styles.inputContainer]}>
          <TextInput style={styles.textInput} placeholder="Type your message" />
        </View>
      </View>
    </View>
  );
};
const Item = ({ index }) => {
  return (
    <View
      style={[
        styles.messageBubble,
        {
          alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.messageText}>
        {index % 2 === 0 ? `Hi - ${index}` : `By - ${index}`}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: "blue",
    padding: 16,
    zIndex: 1,
  },
  header: {
    color: "#fff",
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  messageBubble: {
    width: "30%",
    backgroundColor: "blue",
    borderRadius: 16,
    borderColor: "red",
    borderWidth: 1,
    marginVertical: 4,
    marginBottom: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default MiniChat;
