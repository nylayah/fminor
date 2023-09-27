// this is a visual component that displays an image associated with a chord or note
import { StyleSheet, Text, View } from 'react-native';
import {notes, chords} from '../notesandchords.js';

const accidentalDict = {
    "0": "",
    "1": "#",
    "2": "b",
}


export const Card = ({note, difficulty}) => {

    // const noteDisplay = notes[{note}]
    // const accidental = notes[{note}].accidental
    // const octave = notes[{note}].octave


    return (
        <View style = {styles.card}>
            {/* <Text style = {styles.normText}>{noteDisplay}</Text>
            <Text style = {styles.normText}>{accidental}</Text>
            <Text style = {styles.octaveText}>{octave}</Text> */}
            <Text style = {styles.normText}>notes[{note}]</Text>
        </View>
        // conditional view with image of fingering if level is easy
    )

}
const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      padding:'2%',
      marginHorizontal:5,
      borderWidth:'1px',
      height:'70%',

    },
    octaveText: {   
        fontSize: 10,
    },
    normText: {
        fontSize: 20,
    },   
});