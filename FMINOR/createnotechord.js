import {notes, accidentals, majorchords  } from "./notesandchords.js"

function returnRandomNote() {
    // returns a random note for the user to play/pick
    const note = notes[Math.floor(Math.random() * notes.length)];
    const accidental = accidentals[Math.floor(Math.random() * accidentals.length)];
    
    // return note or accidental
    if (Math.random() < 0.5) {
        return accidental;
    }
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
}

function returnRandomNoteOrChord() {
    // returns a random note (including accidentals) or chord for the user to play/pick
    // currently limited to major chords
    if (Math.random() < 0.5) {
        return returnRandomChord();
    }
    else {
        const note = notes[Math.floor(Math.random() * notes.length)];
        const accidental = accidentals[Math.floor(Math.random() * accidentals.length)];
        
        // return note or accidental
        if (Math.random() < 0.5) {
            return accidental;
        }
        return note;
    }
    
}   

export default (returnRandomNote, returnRandomChord, returnRandomNoteOrChord);