import { StyleSheet, View, ScrollView, Image } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name } = planet;
  console.log("planet", planet);

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/mercury.png")}
          />
        );
      case "venus":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
      case "earth":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/earth.png")}
          />
        );
      case "mars":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
      case "jupiter":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
      case "saturn":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
      case "uranus":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
      case "neptune":
        return (
          <Image
            style={styles.imageSize}
            source={require("../images/venus.png")}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage(name)}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  imageSize: {
    width: 400,
    height: 400,
  },
});
