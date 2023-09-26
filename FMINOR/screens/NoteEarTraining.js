import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {returnRandomNote, returnRandomChord, returnRandomNoteOrChord } from '../createnotechord';
import { notes } from "../notesandchords.js"
import { NavBar } from '../components/NavBar'

const gameMode = {
    // easy - must choose right note
    // hard - must choose the right note and octave
}

const notesToPlay = {
    // infinite loop that returns notes for the user to play
    // notes given are limited to the gameMode
}


export const NoteEarTrainingSession = () => {
    // loop that will play a frequency from notesToPlay
    // will display a number of random notes for the user to choose from (one of the notes will be the correct answer)
        // number of notes displayed will depend on the gameMode
    // user must select the correct note associated with the audio frequency being played 
    return (
        <SafeAreaView style={styles.container}>
            <Text>Note Ear Training Session</Text>
            <NavBar/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
      
    },
  })