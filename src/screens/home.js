import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader></PlanetHeader>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
