import styles from '../assets/styling';
import React from 'react';
import {SafeAreaView, Text, Pressable, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import  {useSelector} from 'react-redux';

export default function AppEntry() {
  const navigation = useNavigation();
  const state = useSelector((state) => state);

  console.log(state);

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
          <SafeAreaView style={state.lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
              <View style = {localStyles.localView}>
                <Text style={state.lightMode ? styles.lightModeText : styles.darkModeText}>F M I N O R</Text>
              </View>
                {/* Buttons to navigate to other screens */}
              <View style = {localStyles.localButtonContainer}>
                <Pressable style={state.lightMode ? styles.lightButton : styles.darkButton} onPress={handleStartSession}>
                    <Text style={state.lightMode ? styles.lightButtonText : styles.darkButtonText}>Start Session</Text>
                </Pressable>
                <Pressable style={state.lightMode ? styles.lightButton: styles.darkButton} onPress={handleSessionSettings}>
                    <Text style={state.lightMode ? styles.lightButtonText : styles.darkButtonText}>Session Settings</Text>
                </Pressable>
                <Pressable style={state.lightMode ? styles.lightButton : styles.darkButton } onPress={handleAboutFMINOR}>
                    <Text style={state.lightMode ? styles.lightButtonText : styles.darkButtonText}>About FMINOR</Text>
                </Pressable>
              </View>
              
          </SafeAreaView>
      )  
  }

  const localStyles = StyleSheet.create({
    localButtonContainer: {
      position: 'absolute',
      bottom: 0,
      paddingBottom: 60,
    },
    localView: {
      position: 'absolute',
      top: 0,
      paddingTop: 100,
    }
  })


