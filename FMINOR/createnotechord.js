import {notes, accidentals, majorchords  } from "./notesandchords.js"

//length of notes dictionary
const notesLength = Object.keys(notes).length;

//length of accidentals dictionary
const accidentalsLength = Object.keys(accidentals).length;

//length of majorChords
const majorChordsLength = Object.keys(majorchords).length;


export function returnRandomNote() {
    
    // returns a random note for the user to play/pick
    

    const note = Object.entries(notes)[Math.floor(Math.random() * notesLength)][0]
    const accidental = Object.entries(accidentals)[Math.floor(Math.random() * accidentalsLength)][0];
    
    // return note or accidental
    if (Math.random() < 0.5) {
        return accidental;
    }
    return note;
}

export function returnRandomChord(chordtype) {
    //returns a random chord for the user to play/pick
    // currently limited to major chords
    switch (chordtype) {
        case "major":
            const majorchord = Object.entries(majorchords)[Math.floor(Math.random() * majorChordsLength)][0];
            return majorchord;
        default:
            throw new Error (`Invalid chord type: ${chordtype}`);

    }
}

export function returnRandomNoteOrChord() {
    // returns a random note (including accidentals) or chord for the user to play/pick
    // currently limited to major chords
    if (Math.random() < 0.5) {
        return returnRandomChord("major");
    }
    else {
        const note = Object.entries(notes)[Math.floor(Math.random() * notesLength)][0];
        const accidental = Object.entries(accidentals)[Math.floor(Math.random() * accidentalsLength)][0];
        
        // return note or accidental
        if (Math.random() < 0.5) {
            return accidental;
        }
        return note;
    }
    
}   