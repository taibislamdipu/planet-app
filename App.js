import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './src/theme/colors'
import { spacing } from './src/theme/spacing'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text style={{ marginTop: spacing[4] }}>Hello, world!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  }
})