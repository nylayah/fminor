import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import {returnRandomNote, returnRandomChord} from './createnotechord.js';
import {startFMINOR} from './gamefunctions.js';
import React, { useState } from 'react';


export default function App() {
  
  const [gameMode, setGameMode] = useState(null);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  const handleModeSelection = (index) => {
    setGameMode(index);
    console.log(gameMode);
  }
  
  const handleDifficultySelection = (index) => {
    setGameDifficulty(index);
    console.log(gameDifficulty);
  }

  const elementsToPlay = useState([]);

  function populateElementsToPlay(gameMode, gameDifficulty){
    //populate elementsToPlay array with notes and chords based on gameMode
    switch (gameMode) {
      case 0:
        switch (gameDifficulty) {
          case 0:
            for (i=0; i<5; i++){
              elementsToPlay.push(returnRandomNote);
            }
            break;
          case 1:
            for (i=0; i<10; i++){
              elementsToPlay.push(returnRandomNote);
            }
            break;
          case 2:
            for (i=0; i<15; i++){
              elementsToPlay.push(returnRandomNote);
            }
            break;
          default:
            throw new Error (`Invalid game difficulty: ${gameDifficulty}`);
        }
        startFMINOR(gameMode, gameDifficulty, elementsToPlay);

      case 1:
        switch (gameDifficulty) {
          case 0:
            for (i=0; i<5; i++){
              elementsToPlay.push(returnRandomChord("major"));
            }
            break;
          case 1:
            for (i=0; i<10; i++){
              elementsToPlay.push(returnRandomChord("major"));
            }
            break;
          case 2:
            for (i=0; i<15; i++){
              elementsToPlay.push(returnRandomChord("major"));
            }
            break;
          default:
            throw new Error (`Invalid game difficulty: ${gameDifficulty}`);
          }
          startFMINOR(gameMode, gameDifficulty, elementsToPlay);
      case 2:
        switch (gameDifficulty) {
          case 0:
            for (i=0; i<5; i++){
              elementsToPlay.push(returnRandomNoteOrChord);
            }
            break;
          case 1:
            for (i=0; i<10; i++){
              elementsToPlay.push(returnRandomNoteOrChord);
            }
            break;
          case 2:
            for (i=0; i<15; i++){
              elementsToPlay.push(returnRandomNoteOrChord);
            }
            break;
          default:
            throw new Error (`Invalid game difficulty: ${gameDifficulty}`);
        }
        startFMINOR(gameMode, gameDifficulty, elementsToPlay);
      default:
        throw new Error (`Invalid game mode: ${gameMode}`);  
      }
    }
  


    




  return (
    <SafeAreaView style={styles.container}>
      {/* TITLE */}
      <Text style={styles.titleText}>FMINOR</Text>
      
      {/* GAME MODE SELECTION */}
      <View style={styles.gameSettingSelection}>
        <TouchableOpacity style={gameMode === 0 ? styles.selector : styles.selected}
          onPress={handleModeSelection(0)}>
          <Text>Notes Only</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gameMode === 1 ? styles.selector : styles.selected}
          onPress={handleModeSelection(1)}>
          <Text>Chords Only</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gameMode === 2 ? styles.selector : styles.selected}
          onPress={handleModeSelection(2)}>
          <Text>Mix</Text>
        </TouchableOpacity>
      </View>
      
      {/* GAME DIFFICULTY SELECTION */}
      <View style={styles.gameSettingSelection}>
        <TouchableOpacity style={gameDifficulty === 0 ? styles.selector : styles.selected}
          onPress={handleDifficultySelection(0)}>
          <Text>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gameDifficulty === 1 ? styles.selector : styles.selected}
          onPress={handleDifficultySelection(1)}>
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gameDifficulty === 2 ? styles.selector : styles.selected}
          onPress={handleDifficultySelection(2)}>
          <Text>Hard</Text>
        </TouchableOpacity>
      </View>

      {/* START BUTTON */}
      <TouchableOpacity style={styles.startButton}
       onPress={() => populateElementsToPlay(gameMode,gameDifficulty)}>
        <Text>Start</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  gameSettingSelection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#5BC0BE',
    alignItems: 'center',
  },
  selector: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 10,
    fontSize:10,
    padding:'2%',
  },
  selected: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 10,
    fontSize:10,
    padding:'2%'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff',
  },
  startButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    color: '#5BC0BE',
    borderRadius: 100,
    fontSize:10,
    padding:'2%',
  },
})
