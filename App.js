import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './src/theme/colors'
import { spacing } from './src/theme/spacing'
import { typography } from './src/theme/typography'
import Text from './src/components/text/text'
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ color: "blue" }}>lorem ipsum dolor sit amet, con</Text>
      <Text preset="small" style={{ marginTop: spacing[4] }}>Hello, world!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  }
})