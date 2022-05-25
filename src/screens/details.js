import { StyleSheet, View, ScrollView, Image } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name } = planet;
  console.log("planet", planet);

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
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
