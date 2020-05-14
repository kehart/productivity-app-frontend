import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const WelcomeBanner = props => {
    return (
        <View style={styles.topView}>
          <View style={styles.logoView}>
            <Text> Logo style</Text>
          </View>
          <View style={styles.textView}>
            <Text> Text style</Text>
          </View>
        </View>
)};

const styles = StyleSheet.create({
    logoView: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
      },
      textView: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 3
      },
      topView: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2,
        width: '100%',
        margin: 10,
        flexDirection: 'row'
      },
});

export default WelcomeBanner;