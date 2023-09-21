import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameHomeScreen } from './screens/GameHomeScreen';
import { ActiveGameScreen } from './screens/ActiveGameScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="GameHomeScreen" component={GameHomeScreen} />
        <Stack.Screen name="ActiveGameScreen" component={ActiveGameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}


