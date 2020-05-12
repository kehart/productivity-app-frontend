import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text> A view for the top part</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.rowView}>
          <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableTile}>
            <Text> My button!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  topView: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 2,
    width: '100%',
    margin: 10
  },
  bottomView: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 3,
    width: '100%',
    margin: 10
  },
  rowView: {
    borderWidth: 1,
    borderColor: 'green',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 15
  },
  touchableTile: {
    backgroundColor: 'red',
    marginHorizontal: 15,
    height: '85%',
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
