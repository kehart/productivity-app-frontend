import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import ButtonRow from './components/home-screen/ButtonRow'
import WelcomeBanner from './components/home-screen/WelcomeBanner'
import NavigationBar from './components/home-screen/NavigationBar'
import SubmitEventModal from './components/home-screen/SubmitEventModal';
import CreateGoalModal from './components/home-screen/CreateGoalModal';

export default function App() {
  const [isAddEventMode, setIsAddEventMode] = useState(false);
  const [isCreateGoalMode, setIsCreateGoalMode] = useState(false);

  const onViewGoals = () => {
    console.log('view goals pressed')
  }

  const onCreateGoal = () => {
    console.log('create goal pressed')
    setIsCreateGoalMode(true);
  }

  // handler for modal submission
  const createGoalHandler = () => {
    setIsCreateGoalMode(false);
  }

  const cancelGoalHandler = () => {
    setIsCreateGoalMode(false);
  }

  const onViewEventLog = () => {
    console.log('view event log pressed')
  }

  const onSubmitEvent = () => {
    console.log('submit event pressed')
    setIsAddEventMode(true);
  }

  // handler for modal submission
  const submitEventHandler = () => {
    setIsAddEventMode(false);
  }

  const cancelEventHandler = () => {
    setIsAddEventMode(false);
  }

  const onSettings = () => {
    console.log('settings prsesed')
  }

  const onViewAchievements = () => {
    console.log('view achievements prssed')
  }

  return (
    <View style={styles.outermost}>
      <NavigationBar text={'Application Home'} />
      
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
