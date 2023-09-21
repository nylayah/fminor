import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';
import {returnRandomNote, returnRandomChord, returnRandomNoteOrChord} from '../createnotechord.js';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



export const GameHomeScreen = () => {
    
    const navigation = useNavigation();

    const [gameMode, setGameMode] = useState(null);
    const [gameDifficulty, setGameDifficulty] = useState(null);
  
    useEffect (()=> {
    
      console.log("gameMode: " + gameMode + "|| gameDifficulty " + gameDifficulty)
    }, [gameMode, gameDifficulty]);
  
  
    const handleModeSelection = (index) => () => {
      setGameMode(index);
    }
    
    const handleDifficultySelection = (index) => () => {
      setGameDifficulty(index);
    }
  
    const handleSetGameToStart = () => {
      if (gameMode === null || gameDifficulty === null){
        return;
      }
      navigation.navigate('ActiveGameScreen' , {
            gameMode,
            gameDifficulty,
          })
    }
    
  
    return (
      <SafeAreaView style={styles.container}>
        {/* TITLE */}
        <Text style={styles.titleText}> FMINOR </Text>
        
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
  
        {/* START BUTTON */}
        <Pressable style={styles.startButton}
         onPress={handleSetGameToStart}>
          <Text>Start</Text>
        </Pressable>
  
        <StatusBar hidden = "true" style="auto" />
      </SafeAreaView>
    );
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
    },
  })
  
  