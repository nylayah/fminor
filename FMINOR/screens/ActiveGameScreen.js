import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { returnRandomNote, returnRandomChord, returnRandomNoteOrChord } from '../createnotechord';
import { Card } from '../components/elementCard';

const gameModeToElementGenerator = {
    0: () => returnRandomNote(),
    1: () => returnRandomChord("major"),
    2: () => returnRandomNoteOrChord(),
  };
  
const gameDifficultyToElementCount = {
    0: 5,
    1: 10,
    2: 15,
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
    
    const route = useRoute();

    const gameMode = route.params.gameMode;
    const gameDifficulty = route.params.gameDifficulty;
    const elementsToPlay = populateElementsToPlay(gameMode,gameDifficulty);
    
    
    startFMINOR(gameMode,gameDifficulty, elementsToPlay);

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
            <View style={styles.elementsContainer}>
              {/* Refresh */}
              <Pressable style={styles.startButton}>
                <Text>Refresh</Text>
              </Pressable>
              {/* New Game */}
              <Pressable style={styles.startButton}>
                <Text>New Game</Text>
              </Pressable>



            </View>
           
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
      justifyContent: 'space-evenly'
    },
    headerText: {
      fontSize: 20,
      color: "#5BC0BE",
    },
    elementsContainer:
    {
      flexDirection: 'row',
      padding: '10%',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center'
    },
    startButton: {
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      color: '#5BC0BE',
      borderRadius: 360,
      fontSize:10,
      padding:'10%',
    },
});


