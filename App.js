import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ButtonRow from './components/home-screen/ButtonRow'
import WelcomeBanner from './components/home-screen/WelcomeBanner'
import NavigationBar from './components/home-screen/NavigationBar'

export default function App() {
  return (
    <View style={styles.outermost}>
      <NavigationBar text={'Application Home'} />
      
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
