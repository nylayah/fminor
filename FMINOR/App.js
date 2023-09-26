import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameHomeScreen } from './screens/GameHomeScreen';
import { ActiveGameScreen } from './screens/ActiveGameScreen';
import { NoteEarTrainingSession } from './screens/NoteEarTraining';
import { SessionSettings } from './screens/SessionSettings';
import { TestHomeScreen } from './screens/TestHomeScreen'
import { NoteDetector } from './screens/NoteDetector';



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SessionSettings" component={SessionSettings}/>
        <Stack.Screen name="TestHomeScreen" component={TestHomeScreen} />
        <Stack.Screen name="GameHomeScreen" component={GameHomeScreen} />
        <Stack.Screen name="ActiveGameScreen" component={ActiveGameScreen}/>
        <Stack.Screen name="NoteEarTraining" component={NoteEarTrainingSession}/>
        
        {/* <Stack.Screen name="NoteDetector" component={NoteDetector}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}


