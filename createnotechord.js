import {notes} from "notesandchords.js"

function returnRandomNote() {
    // returns a random note for the user to play/pick
    const note = notes[Math.floor(Math.random() * notes.length)];
    
    return note;
}

function returnRandomChord(chordtype) {
    //returns a random chord for the user to play/pick
    // currently limited to major chords
    switch (chordtype) {
        case "major":
            const majorchord =majorchords[Math.floor(Math.random() * majorchords.length)];
            return majorchord;
        default:
            throw new Error (`Invalid chord type: ${chordtype}`);

    }
    
    const majorchords = notes[Math.floor(Math.random() * notes.length)];
    
    return note;
}