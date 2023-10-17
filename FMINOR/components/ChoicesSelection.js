import React from "react";
import {notes} from '../notesandchords';
import {View, Text, StyleSheet} from 'react-native';


function returnAccidentalText (accidental) {
    switch (accidental) {
        case 0:
            return "";
        case 1:
            return "#";
        case 2:
            return "b";
        default:
            throw new Error (`Invalid accidental: ${accidental}`);
    }
}


const ChoiceSelection = ({choice, choiceDifficulty}) => {
    const Choice = (choice) => {
        const note = notes[`${choice}`].letterGroup;
        const accidental = notes[`${choice}`].accidental;
        const octave = notes[`${choice}`].octave;
        return (
            <View style = {styles.noteView}>
                <Text style={styles.note}>{note}</Text>
                <Text style={styles.accidental}>{returnAccidentalText(accidental)}</Text>
                <Text style={styles.octave}>{octave}</Text>
            </View>
        )
    }
    return (
        <View>
        {Choice(choice)}
        </View>
    )
}


const styles = StyleSheet.create({ 
    noteView:{
        flexDirection: 'row',
    },
    note: { 
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
    },
    accidental: {
        fontSize: 20,
        textAlign: 'center',
    },
    octave: {
        fontSize: 10,
        textAlign: 'center',
        bottom: 0,
    }
})

export default ChoiceSelection;