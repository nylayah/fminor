import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppEntry from './screens/AppEntry';
import ActiveGameScreen from './screens/ActiveGameScreen';
import SessionSettings from './screens/SessionSettings';
import AboutFMINOR from './screens/AboutFMINOR';
import { Provider } from 'react-redux';
import settingsReducer from './functionality/settings';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(settingsReducer);
const Stack = createStackNavigator();


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="AppEntry" component={AppEntry} />
          <Stack.Screen name="SessionSettings" component={SessionSettings} />
          <Stack.Screen name="ActiveGameScreen" component={ActiveGameScreen} />
          <Stack.Screen name="AboutFMINOR" component={AboutFMINOR} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
  
}



