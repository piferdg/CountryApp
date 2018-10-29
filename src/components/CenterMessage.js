import { React } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { colors } from '../theme';

export default CenterMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No Locations</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  text: {
    
  }
})