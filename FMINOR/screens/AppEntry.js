import styles from '../assets/styling';
import React from 'react';
import {SafeAreaView, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';
import rootReducer from '../functionality/settings.js';
import {legacy_createStore as createStore} from 'redux';

export default function AppEntry() {
  const store = createStore(rootReducer);
  const state = store.getState();
  const navigation = useNavigation();

  // Navigate to Active Game Screen
  const handleStartSession = () => {
    navigation.navigate('ActiveGameScreen');
  }

  // Navigate to Session Settings
  const handleSessionSettings = () => {
    navigation.navigate('SessionSettings');
  }
  
  // Navigate to About FMINOR
  const handleAboutFMINOR = () => {
    navigation.navigate('AboutFMINOR');
  }


      return (
        <Provider store={store}>
          <SafeAreaView style={ state.lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
              <Text style={styles.text}>F M I N O R</Text>
              <Pressable style={styles.button} onPress={handleStartSession}>
                  <Text style={styles.buttonText}>Start Session</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={handleSessionSettings}>
                  <Text style={styles.buttonText}>Session Settings</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={handleAboutFMINOR}>
                  <Text style={styles.buttonText}>About FMINOR</Text>
              </Pressable>
          </SafeAreaView>
        </Provider>
      )  
  }


