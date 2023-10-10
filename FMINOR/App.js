import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppEntry from './screens/AppEntry';
import ActiveGameScreen from './screens/ActiveGameScreen';
import SessionSettings from './screens/SessionSettings';
import AboutFMINOR from './screens/AboutFMINOR';


const Stack = createStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="AppEntry" component={AppEntry} />
          <Stack.Screen name="SessionSettings" component={SessionSettings} />
          <Stack.Screen name="ActiveGameScreen" component={ActiveGameScreen} />
          <Stack.Screen name="AboutFMINOR" component={AboutFMINOR} />
        </Stack.Navigator>
      </NavigationContainer>
    
  )
  
}



