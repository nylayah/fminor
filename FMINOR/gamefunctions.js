import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';




export default function startFMINOR(gameMode, gameDifficulty, elementsToPlay){
    console.log("startFMINOR called");
    console.log(gameMode);
    console.log(gameDifficulty);
    console.log(elementsToPlay);
    
    return (
        <SafeAreaView style={styles.container}>

            <Text>Game Mode: {gameMode}</Text>
            <Text>Game Difficulty: {gameDifficulty}</Text>
            <Text>Elements to Play: {elementsToPlay}</Text>


        </SafeAreaView>
    );

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
});



