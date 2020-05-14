import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ButtonRow from './components/home-screen/ButtonRow'
import WelcomeBanner from './components/home-screen/WelcomeBanner'

export default function App() {
  return (
    <View style={styles.outermost}>
      <View style={styles.topBar}> 
        <Text> Application home</Text>
      </View>
      
      <View style={styles.container}>
        <WelcomeBanner />
        <View style={styles.bottomView}>
            <ButtonRow firstButtonTitle={'View Goals'} secondButtonTitle={'Create Goal'}/>
            <ButtonRow firstButtonTitle={'View Event Log'} secondButtonTitle={'Submit Event'}/>
            <ButtonRow firstButtonTitle={'Settings'} secondButtonTitle={'View Achievements'}/>
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
  bottomView: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 4,
    width: '100%',
    margin: 10
  },
});
