//https://mixbutton.com/mixing-articles/music-note-to-frequency-chart/


// 0 - no accidental, natural note
// 1 - sharp
// 2 - flat

const notes = {
   ////////////////////////////////////////////////////////C///////////////////////////////////////////////////
    "C0" : {
        letterGroup: "C",
        accidental: 0,
        octave: 0,
        frequency: 16.35,
        idx: 1

    },
    "C1" : {
        letterGroup: "C",
        accidental: 0,
        octave: 1,
        frequency: 32.70,
        idx: 13

    },
    "C2" : {
        letterGroup: "C",
        accidental: 0,
        octave: 2,
        frequency: 65.41,
        idx: 25

    },
    "C3" : {
        letterGroup: "C",
        accidental: 0,
        octave: 3,
        frequency: 130.81,
        idx: 37

    },
    "C4" : {
        letterGroup: "C",
        accidental: 0,
        octave: 4,
        frequency: 261.63,
        idx: 49


    },
    "C5" : {
        letterGroup: "C",
        accidental: 0,
        octave: 5,
        frequency: 523.25,
        idx: 61

    },
    "C6" : {
        letterGroup: "C",
        accidental: 0,
        octave: 6,
        frequency: 1046.50,
        idx: 73

    },
    "C7" : {
        letterGroup: "C",
        accidental: 0,
        octave: 7,
        frequency: 2093.00,
        idx: 85

    },
    "C8" : {
        letterGroup: "C",
        accidental: 0,
        octave: 8,
        frequency: 4186.01,
        idx: 97

    },
    "C#0" : {
        letterGroup: "C",
        accidental: 1,
        octave: 0,
        frequency: 17.32,
        idx: 2

    },
    "C#1" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 1,
        frequency: 34.65,
        idx: 14

    },
    "C#2" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 2,
        frequency: 69.30,
        idx: 26

    },
    "C#3" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 3,
        frequency: 138.59,
        idx: 38

    },
    "C#4" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 4,
        frequency: 277.18,
        idx: 50

    },
    "C#5" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 5,
        frequency: 554.37,
        idx: 62

    },
    "C#6" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 6,
        frequency: 1108.73,
        idx: 74

    },
    "C#7" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 7,
        frequency: 2217.46,
        idx: 86

    },
    "C#8" : {
        letterGroup: "C#",
        accidental: 1,
        octave: 8,
        frequency: 4434.92,
        idx: 98

    },
    /////////////////////////////////////////D//////////////////////////////////////////////////////////////
    "D0" : {
        letterGroup: "D",
        accidental: 0,
        octave: 0,
        frequency: 18.35,
        idx: 3

    },
    "D1" : {
        letterGroup: "D",
        accidental: 0,
        octave: 1,
        frequency: 36.71,
        idx: 15

    },
    "D2" : {
        letterGroup: "D",
        accidental: 0,
        octave: 2,
        frequency: 73.42,
        idx: 27

    },
    "D3" : {
        letterGroup: "D",
        accidental: 0,
        octave: 3,
        frequency: 146.83,
        idx: 39

    },
    "D4" : {
        letterGroup: "D",
        accidental: 0,
        octave: 4,
        frequency: 293.66,
        idx: 51

    },
    "D5" : {
        letterGroup: "D",
        accidental: 0,
        octave: 5,
        frequency: 587.33,
        idx: 63

    },
    "D6" : {
        letterGroup: "D",
        accidental: 0,
        octave: 6,
        frequency: 1174.66,
        idx: 75

    },
    "D7" : {
        letterGroup: "D",
        accidental: 0,
        octave: 7,
        frequency: 2349.32,
        idx: 87

    },
    "D8" : {
        letterGroup: "D",
        accidental: 0,
        octave: 8,
        frequency: 4698.63,
        idx: 99

    },
    "D#0" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 0,
        frequency: 19.45,
        idx: 4

    },
    "D#1" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 1,
        frequency: 38.89,
        idx: 16

    },
    "D#2" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 2,
        frequency: 77.78,
        idx: 28

    },
    "D#3" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 3,
        frequency: 155.56,
        idx: 40

    },
    "D#4" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 4,
        frequency: 311.13,
        idx: 52

    },
    "D#5" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 5,
        frequency: 622.25,
        idx: 64

    },
    "D#6" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 6,
        frequency: 1244.51,
        idx: 76

    },
    "D#7" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 7,
        frequency: 2489.02,
        idx: 88

    },
    "D#8" : {
        letterGroup: "D#",
        accidental: 1,
        octave: 8,
        frequency: 4978.03,
        idx: 100

    },
    "Db0" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 0,
        frequency: 17.32,
        idx: 2

    },
    "Db1" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 1,
        frequency: 34.65,
        idx: 14

    },
    "Db2" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 2,
        frequency: 69.30,
        idx: 26

    },
    "Db3" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 3,
        frequency: 138.59,
        idx: 38

    },
    "Db4" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 4,
        frequency: 277.18,
        idx: 50

    },
    "Db5" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 5,
        frequency: 554.37,
        idx: 62

    },
    "Db6" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 6,
        frequency: 1108.73,
        idx: 74

    },
    "Db7" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 7,
        frequency: 2217.46,
        idx: 86

    },
    "Db8" : {
        letterGroup: "Db",
        accidental: 2,
        octave: 8,
        frequency: 4434.92,
        idx: 98

    },
    ///////////////////////////////////////////////////////////E///////////////////////////////////////////////////////////
    "E0" : {
        letterGroup: "E",
        accidental: 0,
        octave: 0,
        frequency: 20.60,
        idx: 5

    },
    "E1" : {
        letterGroup: "E",
        accidental: 0,
        octave: 1,
        frequency: 41.20,
        idx: 17

    },
    "E2" : {
        letterGroup: "E",
        accidental: 0,
        octave: 2,
        frequency: 82.41,
        idx: 29

    },
    "E3" : {
        letterGroup: "E",
        accidental: 0,
        octave: 3,
        frequency: 164.81,
        idx: 41

    },
    "E4" : {
        letterGroup: "E",
        accidental: 0,
        octave: 4,
        frequency: 329.63,
        idx: 53

    },
    "E5" : {
        letterGroup: "E",
        accidental: 0,
        octave: 5,
        frequency: 659.25,
        idx: 65

    },
    "E6" : {
        letterGroup: "E",
        accidental: 0,
        octave: 6,
        frequency: 1318.51,
        idx: 77

    },
    "E7" : {
        letterGroup: "E",
        accidental: 0,
        octave: 7,
        frequency: 2637.02,
        idx: 89

    },
    "E8" : {
        letterGroup: "E",
        accidental: 0,
        octave: 8,
        frequency: 5274.04,
        idx: 101

    },
    "Eb0" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 0,
        frequency: 19.45,
        idx: 4

    },
    "Eb1" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 1,
        frequency: 38.89,
        idx: 16

    },
    "Eb2" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 2,
        frequency: 77.78,
        idx: 28

    },
    "Eb3" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 3,
        frequency: 155.56,
        idx: 40

    },
    "Eb4" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 4,
        frequency: 311.13,
        idx: 52

    },
    "Eb5" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 5,
        frequency: 622.25,
        idx: 64

    },
    "Eb6" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 6,
        frequency: 1244.51,
        idx: 76

    },
    "Eb7" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 7,
        frequency: 2489.02,
        idx: 88

    },
    "Eb8" : {
        letterGroup: "Eb",
        accidental: 2,
        octave: 8,
        frequency: 4978.03,
        idx: 100

    },
   
    //////////////////////////////////////////////////////////F////////////////////////////////////////////////////////////
   "F0" : {
        letterGroup:"F",
        accidental: 0,
        octave: 0,
        frequency: 21.83,
        idx: 6

    },
   "F1" : {
        letterGroup:"F",
        accidental: 0,
        octave: 1,
        frequency: 43.65,
        idx: 18

    },
   "F2" : {
        letterGroup:"F",
        accidental: 0,
        octave: 2,
        frequency: 87.31,
        idx: 30 

    },
   "F3" : {
        letterGroup:"F",
        accidental: 0,
        octave: 3,
        frequency: 174.61,
        idx: 42

    },
   "F4" : {
        letterGroup:"F",
        accidental: 0,
        octave: 4,
        frequency: 349.23,
        idx: 54

    },
   "F5" : {
        letterGroup:"F",
        accidental: 0,
        octave: 5,
        frequency: 698.46,
        idx: 66

    },
   "F6" : {
        letterGroup:"F",
        accidental: 0,
        octave: 6,
        frequency: 1396.91,
        idx:78

    },
   "F7" : {
        letterGroup:"F",
        accidental: 0,
        octave: 7,
        frequency: 2793.83,
        idx: 90

    },
   "F8" : {
        letterGroup:"F",
        accidental: 0,
        octave: 8,
        frequency: 5587.65,
        idx: 102

    },
    "F#0" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 0,
        frequency: 23.12,
        idx: 7

    },
    "F#1" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 1,
        frequency: 46.25,
        idx: 19

    },
    "F#2" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 2,
        frequency: 92.50,
        idx: 31 

    },
    "F#3" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 3,
        frequency: 185.00,
        idx: 43

    },
    "F#4" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 4,
        frequency: 369.99,
        idx: 55

    },
    "F#5" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 5,
        frequency: 739.99,
        idx: 67

    },
    "F#6" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 6,
        frequency: 1479.98,
        idx: 79

    },
    "F#7" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 7,
        frequency: 2959.96,
        idx: 91

    },
    "F#8" : {
        letterGroup: "F#",
        accidental: 1,
        octave: 8,
        frequency: 5919.91,
        idx: 103

    },
    //////////////////////////////////////////////////////////G///////////////////////////////////////////////////////////
    "G0" : {
        letterGroup:"G",
        accidental: 0,
        octave: 0,
        frequency: 24.50,
        idx: 8

    },
   "G1" : {
        letterGroup:"G",
        accidental: 0,
        octave: 1,
        frequency: 49.00,
        idx: 20

    },
   "G2" : {
        letterGroup:"G",
        accidental: 0,
        octave: 2,
        frequency: 98.00,
        idx: 32

    },
   "G3" : {
        letterGroup:"G",
        accidental: 0,
        octave: 3,
        frequency: 196.00,
        idx: 44

    },
   "G4" : {
        letterGroup:"G",
        accidental: 0,
        octave: 4,
        frequency: 392.00,
        idx: 56

    },
   "G5" : {
        letterGroup:"G",
        accidental: 0,
        octave: 5,
        frequency: 783.99,
        idx: 68

    },
   "G6" : {
        letterGroup:"G",
        accidental: 0,
        octave: 6,
        frequency: 1567.98,
        idx: 80

    },
   "G7" : {
        letterGroup:"G",
        accidental: 0,
        octave: 7,
        frequency: 3135.96,
        idx: 92

    },
   "G8" : {
        letterGroup:"G",
        accidental: 0,
        octave: 8,
        frequency: 6271.93,
        idx: 104

    },
    "G#0" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 0,
        frequency: 25.96,
        idx: 9

    },
    "G#1" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 1,
        frequency: 51.91,
        idx: 21

    },
    "G#2" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 2,
        frequency: 103.83,
        idx: 33

    },
    "G#3" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 3,
        frequency: 207.65,
        idx: 45

    },
    "G#4" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 4,
        frequency: 415.30,
        idx: 57

    },
    "G#5" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 5,
        frequency: 830.61,
        idx: 69

    },
    "G#6" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 6,
        frequency: 1661.22,
        idx: 81

    },
    "G#7" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 7,
        frequency: 3322.44,
        idx: 93

    },
    "G#8" : {
        letterGroup: "G#",
        accidental: 1,
        octave: 8,
        frequency: 6644.88,
        idx: 105

    },
    "Gb0" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 0,
        frequency: 23.12,
        idx: 7

    },
    "Gb1" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 1,
        frequency: 46.25,
        idx: 19

    },
    "Gb2" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 2,
        frequency: 92.50,
        idx: 31

    },
    "Gb3" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 3,
        frequency: 185.00,
        idx: 43

    },
    "Gb4" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 4,
        frequency: 369.99,
        idx: 55

    },
    "Gb5" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 5,
        frequency: 739.99,
        idx: 67

    },
    "Gb6" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 6,
        frequency: 1479.98,
        idx: 79

    },
    "Gb7" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 7,
        frequency: 2959.96,
        idx: 91

    },
    "Gb8" : {
        letterGroup: "Gb",
        accidental: 2,
        octave: 8,
        frequency: 5919.91,
        idx: 103

    },
    /////////////////////////////////////////////////////////A///////////////////////////////////////////////////////////
    "A0" : {
        letterGroup:"A",
        accidental: 0,
        octave: 0,
        frequency: 27.50,
        idx: 10

    },
   "A1" : {
        letterGroup:"A",
        accidental: 0,
        octave: 1,
        frequency: 55.00,
        idx: 22

    },
   "A2" : {
        letterGroup:"A",
        accidental: 0,
        octave: 2,
        frequency: 110.00,
        idx: 34

    },
   "A3" : {
        letterGroup:"A",
        accidental: 0,
        octave: 3,
        frequency: 220.00,
        idx: 46

    },
   "A4" : {
        letterGroup:"A",
        accidental: 0,
        octave: 4,
        frequency: 440.00,
        idx: 58

    },
   "A5" : {
        letterGroup:"A",
        accidental: 0,
        octave: 5,
        frequency: 880.00,
        idx: 70

    },
   "A6" : {
        letterGroup:"A",
        accidental: 0,
        octave: 6,
        frequency: 1760.00,
        idx: 82

    },
   "A7" : {
        letterGroup:"A",
        accidental: 0,
        octave: 7,
        frequency: 3520.00,
        idx: 94

    },
   "A8" : {
        letterGroup:"A",
        accidental: 0,
        octave: 8,
        frequency: 7040.00,
        idx: 106

    },
    "A#0" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 0,
        frequency: 29.14,
        idx: 11

    },
    "A#1" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 1,
        frequency: 58.27,
        idx: 23

    },
    "A#2" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 2,
        frequency: 116.54,
        idx: 35

    },
    "A#3" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 3,
        frequency: 233.08,
        idx: 47

    },
    "A#4" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 4,
        frequency: 466.16,
        idx: 59

    },
    "A#5" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 5,
        frequency: 932.33,
        idx: 71

    },
    "A#6" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 6,
        frequency: 1864.66,
        idx: 83

    },
    "A#7" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 7,
        frequency: 3729.31,
        idx: 95

    },
    "A#8" : {
        letterGroup: "A#",
        accidental: 1,
        octave: 8,
        frequency: 7458.62,
        idx: 107

    },
    "Ab0" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 0,
        frequency: 25.96,
        idx: 9

    },
    "Ab1" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 1,
        frequency: 51.91,
        idx: 21

    },
    "Ab2" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 2,
        frequency: 103.83,
        idx: 33

    },
    "Ab3" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 3,
        frequency: 207.65,
        idx: 45

    },
    "Ab4" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 4,
        frequency: 415.30,
        idx: 57

    },
    "Ab5" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 5,
        frequency: 830.61,
        idx: 69

    },
    "Ab6" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 6,
        frequency: 1661.22,
        idx: 81

    },
    "Ab7" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 7,
        frequency: 3322.44,
        idx: 93

    },
    "Ab8" : {
        letterGroup: "Ab",
        accidental: 2,
        octave: 8,
        frequency: 6644.88,
        idx: 105

    },
    ////////////////////////////////////////////////////////B////////////////////////////////////////////////////////////
    "B0" : {
        letterGroup:"B",
        accidental: 0,
        octave: 0,
        frequency: 30.87,
        idx: 12

    },
   "B1" : {
        letterGroup:"B",
        accidental: 0,
        octave: 1,
        frequency: 61.74,
        idx: 24

    },
   "B2" : {
        letterGroup:"B",
        accidental: 0,
        octave: 2,
        frequency: 123.47,
        idx: 36

    },
   "B3" : {
        letterGroup:"B",
        accidental: 0,
        octave: 3,
        frequency: 246.94,
        idx: 48

    },
   "B4" : {
        letterGroup:"B",
        accidental: 0,
        octave: 4,
        frequency: 493.88,
        idx: 60

    },
   "B5" : {
        letterGroup:"B",
        accidental: 0,
        octave: 5,
        frequency: 987.77,
        idx: 72

    },
   "B6" : {
        letterGroup:"B",
        accidental: 0,
        octave: 6,
        frequency: 1975.53,
        idx: 84

    },
   "B7" : {
        letterGroup:"B",
        accidental: 0,
        octave: 7,
        frequency: 3951.07,
        idx: 96

    },
   "B8" : {
        letterGroup:"B",
        accidental: 0,
        octave: 8,
        frequency: 7902.13,
        idx: 108

    },
    "Bb0" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 0,
        frequency: 29.14,
        idx: 11

    },
    "Bb1" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 1,
        frequency: 58.27,
        idx: 23

    },
    "Bb2" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 2,
        frequency: 116.54,
        idx: 35

    },
    "Bb3" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 3,
        frequency: 233.08,
        idx: 47

    },
    "Bb4" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 4,
        frequency: 466.16,
        idx: 59

    },
    "Bb5" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 5,
        frequency: 932.33,
        idx: 71

    },
    "Bb6" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 6,
        frequency: 1864.66,
        idx: 83

    },
    "Bb7" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 7,
        frequency: 3729.31,
        idx: 95

    },
    "Bb8" : {
        letterGroup: "Bb",
        accidental: 2,
        octave: 8,
        frequency: 7458.62,
        idx: 107

    },
    
   
}


const majorchords = {
    "C": ["C", "E", "G"],
    "D": ["D", "F#", "A"],
    "E": ["E", "G#", "B"],
    "F": ["F", "A", "C"],
    "G": ["G", "B", "D"],
    "A": ["A", "C#", "E"],
    "B": ["B", "D#", "F#"],
};

export {notes, majorchords};