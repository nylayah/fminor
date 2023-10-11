import styles from '../assets/styling.js';
import React from 'react';
import {SafeAreaView, Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';


export default function SessionSettings() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const lightMode = useSelector((state) => state.lightMode);
    const micOn = useSelector((state) => state.micOn);
    const difficulty = useSelector((state) => state.difficulty);
    const instrument = useSelector((state) => state.instrument);
    const practiceMode = useSelector((state) => state.practiceMode);

    const handleToggleLightMode = () => {
        dispatch({type: 'TOGGLE_LIGHT_MODE'});
    };

    const handleToggleMic = () => {
        dispatch({type: 'TOGGLE_MIC'});
    };
    
    const handleSelectDifficulty = (difficulty) => {
        dispatch({type: 'SELECT_DIFFICULTY', payload: difficulty});
    };

    const handleSelectInstrument = (instrument) => {
        dispatch({type: 'SELECT_INSTRUMENT', payload: instrument});
    };

    const handleSelectPracticeMode = (practiceMode) => {
        dispatch({type: 'SELECT_PRACTICE_MODE', payload: practiceMode});
    };

    const handleBack = () => {  
        navigation.goBack();
    }


    return (
            <SafeAreaView style={lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
                {/* TOGGLE LIGHT MODE */}
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Light Mode: {lightMode ? 'On' : 'Off'}</Text>
                    <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={handleToggleLightMode}>
                        <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Toggle Light Mode</Text>
                    </Pressable>
                </View>

                {/* TOGGLE MIC */}
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Microphone On: {micOn ? 'Yes' : 'No'}</Text>
                    <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={handleToggleMic}>
                        <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Change Microphone Mode</Text>
                    </Pressable>
                </View>

                {/* SELECT DIFFICULTY */}
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                       <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Difficulty: {difficulty}</Text>
                        <View style = {lightMode ? styles.lightViewH : styles.darkViewH}>
                            <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectDifficulty('Easy')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Easy</Text>
                            </Pressable>
                            <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectDifficulty('Medium')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Medium</Text>
                            </Pressable>
                            <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectDifficulty('Hard')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Hard</Text>
                            </Pressable>
                        </View>
                </View>

                {/* SELECT INSTRUMENT */}
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Instrument: {instrument}</Text>
                    <View style = {lightMode ? styles.lightViewH : styles.darkViewH}>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectInstrument('Piano')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Piano</Text>
                        </Pressable>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectInstrument('Guitar')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Guitar</Text>
                        </Pressable>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectInstrument('Violin')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Violin</Text>
                        </Pressable>
                    </View> 
                </View>

                {/* SELECT PRACTICE MODE */}
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Practice Mode: {practiceMode}</Text>
                    <View style = {lightMode ? styles.lightViewH : styles.darkViewH}>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectPracticeMode('Notes')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Notes</Text>
                        </Pressable>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectPracticeMode('Chords')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Chords</Text>
                        </Pressable>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={() => handleSelectPracticeMode('Both')}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Both</Text>
                        </Pressable>
                    </View>
                </View>




                {/* GO TO PREVIOUS SCREEN */}
                <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={handleBack}>
                    <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Back</Text>
                </Pressable>
            
            </SafeAreaView>
      )
      
    }