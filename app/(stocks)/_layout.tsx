import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Slot } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Slot
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    />
  );
}
