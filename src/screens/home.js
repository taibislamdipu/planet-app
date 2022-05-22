import { View, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset="h4" style={styles.itemName}>
                  {name}
                </Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  list: {
    padding: spacing[5],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
});
