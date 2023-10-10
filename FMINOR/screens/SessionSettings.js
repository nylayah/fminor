import styles from '../assets/styling.js';
import {SafeAreaView, Text, Pressable, View} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import rootReducer from '../functionality/settings.js';
import {legacy_createStore as createStore} from 'redux';
import {useNavigation} from '@react-navigation/native';

export default function SessionSettings() {
    const store = createStore(rootReducer);
    const state = store.getState();
    const navigation = useNavigation();

    const handleBack = () => {
        // Navigate to previous screen
        navigation.goBack();
    }

    const toggleLightMode = () => {
        store.dispatch({
            type: 'TOGGLE_LIGHT_MODE',
        })
    }

    const toggleMicReducer = () => {
        store.dispatch({
            type: 'TOGGLE_MIC',
        })
    }
    const selectDifficulty = (difficulty) => {
        store.dispatch({
            type: 'SELECT_DIFFICULTY',
            payload: difficulty,
        })
    }
    const selectInstrument = (instrument) => {
        store.dispatch({
            type: 'SELECT_INSTRUMENT',
            payload: instrument,
        })
    }
    const selectPracticeMode = (practiceMode) => {
        store.dispatch({
            type: 'SELECT_PRACTICE_MODE',
            payload: practiceMode,
        })
    }


    return (
        <Provider store={store}>
            <SafeAreaView style={state.lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
                <Text style={styles.text}>Session Settings</Text>

                {/* LIGHT MODE SELECTION */}
                <View style={state.lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={styles.text}>Light Mode: {state.lightMode ? 'On' : 'Off'}</Text>
                    <Pressable style={styles.button} onPress={toggleLightMode}>
                        <Text style={styles.buttonText}>Toggle Light Mode</Text>
                    </Pressable>
                </View>

                {/* MIC SELECTION */}
                <View style={state.lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={styles.text}>Mic: {state.micOn ? 'On' : 'Off'}</Text>
                    <Pressable style={styles.button} onPress={toggleMicReducer}>
                        <Text style={styles.buttonText}>Toggle Mic</Text>
                    </Pressable>
                </View>

                {/* DIFFICULTY SELECTION */}
                <View style={state.lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={styles.text}>Difficulty: {state.difficulty}</Text>
                    <View style={state.lightMode ? styles.lightViewH : styles.darkViewH}>
                        <Pressable style={styles.button} onPress={selectDifficulty('Easy')}>
                            <Text style={styles.buttonText}>Easy</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectDifficulty('Medium')}>
                            <Text style={styles.buttonText}>Medium</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectDifficulty('Hard')}>
                            <Text style={styles.buttonText}>Hard</Text>
                        </Pressable>
                    </View>
                </View>

                {/* INSTRUMENT SELECTION */}
                <View style={state.lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={styles.text}>Instrument: {state.instrument}</Text>
                    <View style={state.lightMode ? styles.lightViewH : styles.darkViewH}>
                        <Pressable style={styles.button} onPress={selectInstrument('Piano')}>
                            <Text style={styles.buttonText}>Piano</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectInstrument('Guitar')}>
                            <Text style={styles.buttonText}>Guitar</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectInstrument('Bass')}>
                            <Text style={styles.buttonText}>Bass</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectInstrument('Violin')}>
                            <Text style={styles.buttonText}>Violin</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectInstrument('Voice')}>
                            <Text style={styles.buttonText}>Voice</Text>
                        </Pressable>
                    </View>
                </View>

                {/* PRACTICE MATERIAL SELECTION */}
                <View style={state.lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={styles.text}>Practice Material: {state.practiceMaterial}</Text>
                    <View style={state.lightMode ? styles.lightViewH : styles.darkViewH}>
                        <Pressable style={styles.button} onPress={selectPracticeMode('Notes')}>
                            <Text style={styles.buttonText}>Scales</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectPracticeMode('Chords')}>
                            <Text style={styles.buttonText}>Chords</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={selectPracticeMode('Both')}>
                            <Text style={styles.buttonText}>Both</Text>
                        </Pressable>
                    </View>
                </View>


                {/* GO TO PREVIOUS SCREEN */}
                <Pressable style={styles.button} onPress={handleBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
            </SafeAreaView>
        </Provider>
      )
      
    }