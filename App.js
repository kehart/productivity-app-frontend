import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './components/home-screen/HomeScreen';
import SettingsScreen from './components/settings/SettingsScreen';
import AchievementsScreen from './components/achievements/AchievementsScreen';
import GoalScreen from './components/view-goals/GoalScreen';
import EventScreen from './components/event-log/EventScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{title: "Application Home"}} />
        <Stack.Screen name="settings" component={SettingsScreen} options={{title: "Settings"}}/>
        <Stack.Screen name="achievements" component={AchievementsScreen} options={{title: "Achievements"}} />
        <Stack.Screen name="goals" component={GoalScreen} options={{title: "View Goals"}} />
        <Stack.Screen name="events" component={EventScreen} options={{title: "View Event Log"}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// https://reactnative.dev/docs/navigation -> navigation
