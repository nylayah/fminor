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
          <Pressable style={gameMode === 0 ? styles.selected : styles.selector}
            onPress={handleModeSelection(0)}>
            <Text>Notes Only</Text>
          </Pressable>
          <Pressable style={gameMode === 1 ? styles.selected : styles.selector}
            onPress={handleModeSelection(1)}>
            <Text>Chords Only</Text>
          </Pressable>
          <Pressable style={gameMode === 2 ? styles.selected : styles.selector}
            onPress={handleModeSelection(2)}>
            <Text>Mix</Text>
          </Pressable>
        </View>
        
        {/* GAME DIFFICULTY SELECTION */}
        <View style={styles.gameSettingSelection}>
          <Pressable style={gameDifficulty === 0 ? styles.selected : styles.selector}
            onPress={handleDifficultySelection(0)}>
            <Text>Easy</Text>
          </Pressable>
          <Pressable style={gameDifficulty === 1 ? styles.selected : styles.selector}
            onPress={handleDifficultySelection(1)}>
            <Text>Medium</Text>
          </Pressable>
          <Pressable style={gameDifficulty === 2 ? styles.selected : styles.selector}
            onPress={handleDifficultySelection(2)}>
            <Text>Hard</Text>
          </Pressable>
        </View>
  
        {/* START BUTTON */}
        <Pressable style={styles.startButton}
         onPress={handleSetGameToStart}>
          <Text>Start</Text>
        </Pressable>
  
        <StatusBar style="auto" />
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
     
  
    },
    gameSettingSelection: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#5BC0BE',
      justifyContent:'space-around',
      rowGap: '10%'
      
    },
    selector: {
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      borderRadius: 10,
      fontSize:10,
      padding:'5%',
      alignContent: 'center'
    },
    selected: {
      backgroundColor: 'pink',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      borderRadius: 10,
      fontSize:10,
      padding:'5%',
      alignContent: 'center'
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
  
  