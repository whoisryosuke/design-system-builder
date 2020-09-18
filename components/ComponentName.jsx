import React from "react";
import { View, Text } from "react-native";

export default function ComponentName({ children }) {
  return (
    <View>
      <Text>Test Component</Text>
      {children}
    </View>
  );
}
