import {SafeAreaView} from 'react-native'
import {navBar} from '../components/navBar'



export const SessionSettings = () => {
    const [gameMode, setGameMode] = useState(null);
    const [gameDifficulty, setGameDifficulty] = useState(null);
    const [instrument, setInstrument] = useState (null);

    useEffect (()=> {
    
        console.log("gameMode: " + gameMode + "|| gameDifficulty " + gameDifficulty)
      }, [instrument, gameMode, gameDifficulty]);
    
    const handleModeSelection = (index) => () => {
        setGameMode(index);
    }
    
    const handleDifficultySelection = (index) => () => {
        setGameDifficulty(index);
    }
    const handleInstrumentSelection = (index) => () => {
        setInstrument(index)
    }

    const handleSetGameToStart = () => {
    if (gameMode === null || gameDifficulty === null || instrument === null){
        return;
    }
    ///CHANGE GLOBAL SETTINGS --> should notify successful change
    navigation.navigate('ActiveGameScreen' , {
            gameMode,
            gameDifficulty,
        })
    }
      
    return (
        <SafeAreaView>
            {/* TITLE */}
            <Text style={styles.titleText}> Session Settings </Text>
        
            {/* INSTRUMENT SELECTION */}
            <View style={styles.gameSettingSelection}>
                <Pressable style={gameMode === "Piano" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Piano")}>
                    <Text>Piano</Text>
                </Pressable>
                <Pressable style={gameMode === "Bass" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Bass")}>
                    <Text>Bass</Text>
                </Pressable>
                <Pressable style={gameMode === "Guitar" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Guitar")}>
                    <Text>Guitar</Text>
                </Pressable>
                <Pressable style={gameMode === "Violin" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Violin")}>
                    <Text>Violin</Text>
                </Pressable>
            </View>

            {/* GAME MODE SELECTION */}
            <View style={styles.gameSettingSelection}>
                <Pressable style={gameMode === "Notes Only" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Notes Only")}>
                    <Text>Notes Only</Text>
                </Pressable>
                <Pressable style={gameMode === "Chords Only" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Chords Only")}>
                    <Text>Chords Only</Text>
                </Pressable>
                <Pressable style={gameMode === "Notes and Chords" ? styles.selected : styles.selector}
                    onPress={handleModeSelection("Notes and Chords")}>
                    <Text>Mix</Text>
                </Pressable>
            </View>
        
            {/* GAME DIFFICULTY SELECTION */}
            <View style={styles.gameSettingSelection}>
                <Pressable style={gameDifficulty === "Easy" ? styles.selected : styles.selector}
                    onPress={handleDifficultySelection("Easy")}>
                    <Text>Easy</Text>
                </Pressable>
                <Pressable style={gameDifficulty === "Medium" ? styles.selected : styles.selector}
                    onPress={handleDifficultySelection("Medium")}>
                    <Text>Medium</Text>
                </Pressable>
                <Pressable style={gameDifficulty === "Hard" ? styles.selected : styles.selector}
                    onPress={handleDifficultySelection("Hard")}>
                    <Text>Hard</Text>
                </Pressable>
            </View>
  
            {/* UPDATE BUTTON */}
            <Pressable style={styles.startButton}
            onPress={handleSetGameToStart}>
                <Text>UPDATE SETTINGS</Text>
            </Pressable>
    
            <navBar/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
      alignContent:'center',
      justifyContent: 'space-evenly',
      paddingTop: '10%',
      paddingBottom: '10%',
      textAlign: 'center'
     
  
    },
    gameSettingSelection: {
      flexDirection: 'row',
      backgroundColor: '#5BC0BE',
      justifyContent:'center',
      alignContent:'center',
    },
    selector: {
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      borderRadius: 10,
      fontSize:10,
      padding:'5%',
      alignContent: 'center',
      marginHorizontal: 5,
      borderWidth: "1px"
    },
    selected: {
      backgroundColor: 'pink',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      borderRadius: 10,
      fontSize:10,
      padding:'5%',
      alignContent: 'center',
      marginHorizontal: 5,
    },
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: '#fff',
    },
    startButton: {
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      color: '#5BC0BE',
      borderRadius: 360,
      fontSize:10,
      padding:'2%',
      borderWidth:'1px'
    },
  })