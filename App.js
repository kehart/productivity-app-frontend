import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.outermost}>
      <View style={styles.topBar}> 
        <Text> Application home</Text>
      </View>
      
      
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.logoView}>
            <Text> Logo style</Text>
          </View>
          <View style={styles.textView}>
            <Text> Text style</Text>
          </View>
        </View>
        <View style={styles.bottomView}>

            <View style={styles.rowView}>
              <TouchableOpacity style={styles.touchableTile}>
                <Text> View Goals</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableTile}>
                <Text> Create Goal</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowView}>
            <TouchableOpacity style={styles.touchableTile}>
                <Text> View Event Log</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableTile}>
                <Text> Submit Event</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowView}>
            <TouchableOpacity style={styles.touchableTile}>
                <Text> Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableTile}>
                <Text> View Achievements</Text>
              </TouchableOpacity>
            </View>
        </View>

      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  // Level 0
  outermost: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  },
  // Level 1
  topBar : {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    width: '100%',
    backgroundColor: 'grey'
  },
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%'
  },
  // Level 2, within container
  topView: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 2,
    width: '100%',
    margin: 10,
    flexDirection: 'row'
  },
  bottomView: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 4,
    width: '100%',
    margin: 10
  },
  // Level 2, within topView
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
  // Level 2, within bottomView
  rowView: {
    // borderWidth: 1,
    // borderColor: 'green',
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  // Level 3, within rowView
  touchableTile: {
    backgroundColor: 'red',
    marginHorizontal: 15,
    height: '85%',
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
