import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameHomeScreen } from './screens/GameHomeScreen';
import { ActiveGameScreen } from './screens/ActiveGameScreen';
import { NoteEarTrainingSession } from './screens/NoteEarTraining';
import { SessionSettings } from './screens/SessionSettings';
import { TestHomeScreen } from './screens/TestHomeScreen'
import { NoteDetector } from './screens/NoteDetector';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';



const Stack = createStackNavigator();

const NavBar = () => {
  const navigation = useNavigation();
  return (
      <View style = {styles.navBarContainer}>
          <Pressable
           style = {styles.button}
           onPress={()=> navigation.navigate("TestHomeScreen")}>
              <Text style = {{color:"white", flex:1, flexWrap:'wrap', textAlign:'center'}}>Home</Text>
          </Pressable>
          
          <Pressable
           style = {styles.button}
           onPress={()=> navigation.navigate("GameHomeScreen")}>
              <Text style = {{color:"white", flex:1, flexWrap:'wrap', textAlign:'center'}}>Note Generator</Text>
          </Pressable>

          <Pressable
           style = {styles.button}
           onPress={()=> navigation.navigate("NoteEarTraining")}>
              <Text style = {{color:"white", flex:1, flexWrap:'wrap', textAlign:'center'}}>Note Ear Training</Text>
          </Pressable>

          <Pressable
           style = {styles.button}
           onPress={()=> navigation.navigate("SessionSettings")}>
              <Text style = {{color:"white", flex:1, flexWrap:'wrap', textAlign:'center'}}>Session Settings</Text>
          </Pressable>
      </View>

  );
};


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
        <NavBar/>
      </NavigationContainer>
    
  )
  
}

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5BC0BE",
    height: 'auto',
    width: "100%",
    position: "relative",
    bottom: 0,
    padding:'1%'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "25%",
  },
})


