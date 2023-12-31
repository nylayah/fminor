import styles from '../assets/styling.js';
import React from 'react';
import {SafeAreaView, Text, Pressable, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';


export default function SessionSettings() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const lightMode = useSelector((state) => state.lightMode);
    //const micOn = useSelector((state) => state.micOn);
    const difficulty = useSelector((state) => state.difficulty);
    const instrument = useSelector((state) => state.instrument);
    //const practiceMode = useSelector((state) => state.practiceMode);

    const handleToggleLightMode = () => {
        dispatch({type: 'TOGGLE_LIGHT_MODE'});
    };

    // const handleToggleMic = () => {
    //     dispatch({type: 'TOGGLE_MIC'});
    // };
    
    const handleSelectDifficulty = (difficulty) => {
        dispatch({type: 'SELECT_DIFFICULTY', payload: difficulty});
    };

    const handleSelectInstrument = (instrument) => {
        dispatch({type: 'SELECT_INSTRUMENT', payload: instrument});
    };

    // const handleSelectPracticeMode = (practiceMode) => {
    //     dispatch({type: 'SELECT_PRACTICE_MODE', payload: practiceMode});
    // };

    const handleBack = () => {  
        navigation.goBack();
    }


    return (
            <SafeAreaView style={lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
                {/* Settings Header */}
                <View style={lightMode ? styles.lightHeader : styles.darkHeader}>
                    {/* Display Back Button */}
                    <Pressable style = {lightMode ? styles.backButtonL : styles.backButton} onPress={handleBack}>
                        <Text style={lightMode ? styles.lightButtonText : styles.darkModeText}> ← </Text>
                    </Pressable>
                    <View  style={lightMode ? styles.lightViewV : styles.darkViewV}>
                        <Text style ={lightMode ? styles.lightModeText : styles.darkModeText}> S E T T I N G S </Text>
                    </View>
                </View>
                
                <View style = {localStyles.localOptionsContainer}>
                    {/* TOGGLE LIGHT MODE */}
                    <View>
                        <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Light Mode: {lightMode ? 'On' : 'Off'}</Text>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={handleToggleLightMode}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Toggle Light Mode</Text>
                        </Pressable>
                    </View>

                    {/* TOGGLE MIC
                    <View>
                        <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Microphone On: {micOn ? 'Yes' : 'No'}</Text>
                        <Pressable style={lightMode ? styles.lightButton : styles.darkButton} onPress={handleToggleMic}>
                            <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Change Microphone Mode</Text>
                        </Pressable>
                    </View> */}

                    {/* SELECT DIFFICULTY */}
                    <View>
                        <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Difficulty: {difficulty}</Text>
                            <View style = {lightMode ? styles.lightViewH : styles.darkViewH}>
                                <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, difficulty === 'Easy' ? {backgroundColor:'gray'} : null]} onPress={() => handleSelectDifficulty('Easy')}>
                                    <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Easy</Text>
                                </Pressable>
                                <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, difficulty === 'Medium' ? {backgroundColor:'gray'} : null ]} onPress={() => handleSelectDifficulty('Medium')}>
                                    <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Medium</Text>
                                </Pressable>
                                <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, difficulty === 'Hard' ? {backgroundColor:'gray'} : null]} onPress={() => handleSelectDifficulty('Hard')}>
                                    <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Hard</Text>
                                </Pressable>
                            </View>
                    </View>

                    {/* SELECT INSTRUMENT
                    <View>
                        <Text style = {lightMode ? styles.lightModeText : styles.darkModeText}> Instrument: {instrument}</Text>
                        <View style = {lightMode ? styles.lightViewH : styles.darkViewH}>
                            <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, instrument === 'Piano' ? {backgroundColor:'gray'} : null]} onPress={() => handleSelectInstrument('Piano')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Piano</Text>
                            </Pressable>
                            <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, instrument === 'Guitar' ? {backgroundColor:'gray'} : null]} onPress={() => handleSelectInstrument('Guitar')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Guitar</Text>
                            </Pressable>
                            <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, instrument === 'Violin' ? {backgroundColor:'gray'} : null]} onPress={() => handleSelectInstrument('Violin')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Violin</Text>
                            </Pressable>
                            <Pressable style={[lightMode ? styles.lightButton : styles.darkButton, instrument === "Ukelele" ? {backgroundColor:'gray'}: null]} onPress={() => handleSelectInstrument('Ukelele')}>
                                <Text style={lightMode ? styles.lightButtonText : styles.darkButtonText}>Ukelele</Text>
                            </Pressable>
                        </View>
                    </View> */}
                </View>

            
            </SafeAreaView>
      )
      
    }

    const localStyles = StyleSheet.create({ 
        localOptionsContainer: {
            position: 'absolute',
            paddingBottom: 20,
            justifyContent: 'space-between',
        },
})