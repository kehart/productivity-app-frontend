import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import ButtonRow from './ButtonRow';
import WelcomeBanner from './WelcomeBanner';
import SubmitEventModal from './SubmitEventModal';
import CreateGoalModal from './CreateGoalModal';

export default function HomeScreen( { navigation } ) {
  const [isAddEventMode, setIsAddEventMode] = useState(false);
  const [isCreateGoalMode, setIsCreateGoalMode] = useState(false);

  // Button handler
  const onViewGoals = () => {
    navigation.navigate('goals');
  }

  const onCreateGoal = () => {
    console.log('create goal pressed')
    setIsCreateGoalMode(true);
  }

  const onViewEventLog = () => {
    navigation.navigate('events');
  }

  const onSubmitEvent = () => {
    console.log('submit event pressed')
    setIsAddEventMode(true);
  }

  const onSettings = () => {
    navigation.navigate('settings');
  }

  const onViewAchievements = () => {
    navigation.navigate('achievements');
  }

  // Modal Handlers

  const createGoalHandler = () => {
    setIsCreateGoalMode(false);
  }

  const cancelGoalHandler = () => {
    setIsCreateGoalMode(false);
  }

  const submitEventHandler = () => {
    setIsAddEventMode(false);
  }

  const cancelEventHandler = () => {
    setIsAddEventMode(false);
  }

  

  return (
    <View style={styles.outermost}>
    
    <View style={styles.container}>
        <SubmitEventModal visible={isAddEventMode} onSubmit={submitEventHandler} onCancel={cancelEventHandler} />
        <CreateGoalModal visible={isCreateGoalMode} onSubmit={createGoalHandler} onCancel={cancelGoalHandler}/>
        <WelcomeBanner />
        <View style={styles.bottomView}>
            <ButtonRow firstButtonTitle={'View Goals'} onFirstButtonPress={onViewGoals} secondButtonTitle={'Create Goal'} onSecondButtonPress={onCreateGoal}/>
            <ButtonRow firstButtonTitle={'View Event Log'} secondButtonTitle={'Submit Event'} onFirstButtonPress={onViewEventLog} onSecondButtonPress={onSubmitEvent}/>
            <ButtonRow firstButtonTitle={'Settings'} secondButtonTitle={'View Achievements'} onFirstButtonPress={onSettings} onSecondButtonPress={onViewAchievements}/>
        </View>

    </View>
    </View>
  );
}

// https://reactnative.dev/docs/navigation -> navigation
const styles = StyleSheet.create({
  outermost: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
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
