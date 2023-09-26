import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';
import {returnRandomNote, returnRandomChord, returnRandomNoteOrChord} from '../createnotechord.js';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { navBar } from '../components/navBar'



export const GameHomeScreen = () => {
    
  
    return (
      <SafeAreaView>
        <Text>Game Home Screen</Text>
        <navBar/>
      </SafeAreaView>
    );
  }

  