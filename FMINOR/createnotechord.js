import {notes, majorchords  } from "./notesandchords.js"

//length of notes dictionary
const notesLength = Object.keys(notes).length;

//length of majorChords
const majorChordsLength = Object.keys(majorchords).length;

// TODO: implement limits to notes in regards to instrument

export function returnRandomNote() {
    
    // returns a random note for the user to play/pick
    const note = Object.entries(notes)[Math.floor(Math.random() * notesLength)][0]

    return note;
}
