import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { returnRandomNote, returnRandomChord, returnRandomNoteOrChord } from '../createnotechord';
import { Card } from '../components/elementCard';
import {useState, useEffect} from 'react';
import { navBar } from '../components/navBar'

const gameModeToElementGenerator = {
    "Notes Only": () => returnRandomNote(),
    "Chords Only": () => returnRandomChord("major"),
    "Notes and Chords": () => returnRandomNoteOrChord(),
  };
  
const gameDifficultyToElementCount = {
    "Easy": 5,
    "Medium": 10,
    "Hard": 15,
  };
  
const populateElementsToPlay = (gameMode, gameDifficulty) => {
   
    // Generate the elements to play.
    const elementGenerator = gameModeToElementGenerator[gameMode];
    const elementCount = gameDifficultyToElementCount[gameDifficulty];
    const localElementsToPlay = [];

    for (let i = 0; i < elementCount; i++) {
      localElementsToPlay.push(elementGenerator());
    }
    return localElementsToPlay;
  
  };
function startFMINOR(gameMode, gameDifficulty, elementsToPlay){
    console.log("startFMINOR called");
    console.log ('gameMode: ' + gameMode + '|| gameDifficulty: ' + gameDifficulty + '|| elementsToPlay: ' + elementsToPlay) 
}

export const ActiveGameScreen = () => {
    // used to extract params from user selections from previous page
    const route = useRoute();
    // use to navigate back to homescreen 
    const navigation = useNavigation();

    // extracted from game home screen
    // while on this page, these constants should always remain the same
    const gameMode = route.params.gameMode;
    const gameDifficulty = route.params.gameDifficulty;
    
    //chords to be returned to user
    // can change if refressh button is clicked
    const elementsToPlay = populateElementsToPlay(gameMode,gameDifficulty);
    //variable that allows elementstoplay to change
    const[chords,setChords] = useState([]);

    const handleRefreshClick = () => {
      const newChords = populateElementsToPlay(gameMode, gameDifficulty);
      setChords(newChords);
      startFMINOR(gameMode,gameDifficulty,chords);
    }
  
    startFMINOR(gameMode,gameDifficulty, chords);

    return (
        <SafeAreaView style={styles.container}>
          {/* game header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Game Mode: {gameMode}</Text>
            <Text style={styles.headerText}>Game Difficulty: {gameDifficulty}</Text>
          </View>
          
          {/* array of elements to play */}
          <View style={styles.elementsContainer}>
              {elementsToPlay.map((element) => (
                <Card note={element} difficulty={gameDifficulty}/>
              ))}
          </View>
          <View style={styles.buttonsContainer}>
            <Text>-------------------------------</Text>
            {/* Play/Pause */}
            <Pressable style={styles.gameButton}>
              <Text> ▶ || </Text>
            </Pressable>
            {/* Refresh */}
            <Pressable style={styles.gameButton}
              onPress={handleRefreshClick}>
              <Text>Refresh</Text>
            </Pressable>
            {/* Quit Game */}
            <Pressable style={styles.gameButton}
              onPress={()=> navigation.navigate("GameHomeScreen")}>
              <Text>Quit Game</Text>
            </Pressable>
          </View>
          <navBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
    },
    header: {
      flexDirection:'row',
      backgroundColor:'white',
      height:'5%',
      width:'100%',
      justifyContent: 'space-evenly',
      padding:2
    },
    headerText: {
      fontSize: 20,
      color: "#5BC0BE",
    },
    elementsContainer:
    {
      flexDirection: "row",
      justifyContent:'center',
      alignContent:'center',
      marginVertical:10
    },
    buttonsContainer:{
      height: '20%',
      flexDirection:'column',
      alignContent:'center',
      justifyContent: 'center'
    },
    gameButton: {
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      color: '#5BC0BE',
      borderRadius: 20,
      fontSize:10,
      padding:10,
      borderWidth: '1px',
      marginVertical:5,
    },
});


