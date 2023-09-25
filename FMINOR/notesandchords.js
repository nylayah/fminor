//https://mixbutton.com/mixing-articles/music-note-to-frequency-chart/

const notes = {
    "C0":16.35,
    "C1":32.70,
    "C2":65.41,
    "C3":130.81,
    "C4":261.63,
    "C5":523.25,
    "C6":1046.50,
    "C7":2093.00,
    "C8":4186.01,
    
    "D0":18.35,
    "D1":36.71,
    "D2":73.42,
    "D3":146.83,
    "D4":293.66,
    "D5":587.33,
    "D6":1174.66, 
    "D7":2349.32,
    "D8":4698.63,
    
    "E0":20.60,
    "E1":41.20,
    "E2":82.41,
    "E3":164.81, 
    "E4":329.63,
    "E5":659.25,
    "E6":1318.51,
    "E7":2637.02, 
    "E8":5274.04,
    
    "F0": 21.83, 
    "F1":43.65,
    "F2":87.31,
    "F3":174.61, 
    "F4":349.23,
    "F5":698.46, 
    "F6":1396.91, 
    "F7":2793.83,
    "F8":5587.65,
    
    "G0":24.50,
    "G1":49.00,	
    "G2":98.00,	
    "G3":196.00,
    "G4":392.00,	
    "G5":783.99,	
    "G6":1567.98,
    "G7":3135.96, 
    "G8":6271.93,
    
    "A0":27.50, 
    "A1":55.00,
    "A2":110.00, 
    "A3":220.00,	
    "A4":440.00,	
    "A5":880.00,	
    "A6":1760.00, 
    "A7":3520.00,
    "A8":7040.00,
   
    "B0":30.87,
    "B1":61.74,	
    "B2":123.47,
    "B3":246.94,
    "B4":493.88,	
    "B5":987.77,
    "B6":1975.53,
    "B7":3951.07,
    "B8": 7902.13,

    "C#0":17.32,
    "C#1":34.65, 
    "C#2":69.30, 
    "C#4":277.18, 
    "C#5":554.37,	
    "C#6":1108.73, 
    "C#7":2217.46, 
    "C#8":4434.92,
    "Db0":17.32,
    "Db1":34.65, 
    "Db2":69.30, 
    "Db4":277.18, 
    "Db5":554.37,	
    "Db6":1108.73, 
    "Db7":2217.46, 
    "Db8":4434.92,

    "D#0":19.45,
    "D#1":38.89,	
    "D#2":77.78,	
    "D#3":155.56,
    "D#4":311.13,
    "D#5":622.25,
    "D#6":1244.51, 
    "D#7":2489.02,
    "D#8":4978.03,
    "Eb0":19.45,
    "Eb1":38.89,	
    "Eb2":77.78,	
    "Eb3":155.56,
    "Eb4":311.13,
    "Eb5":622.25,
    "Eb6":1244.51, 
    "Eb7":2489.02,
    "Eb8":4978.03,

};

const accidentals = {
   

    "Ebx":[["Eb"],[19.45, 38.89,	77.78,	155.56,	311.13,	622.25,	1244.51, 2489.02, 4978.03]],
    "F#x":[["Gb"],[23.12, 46.25,	92.50,	185.00,	369.99,	739.99,	1479.98, 2959.96, 5919.91 ]],
    "G#x":[["Ab"],[25.96, 51.91,	103.83,	207.65,	415.30,	830.61,	1661.22, 3322.44, 6644.88]],
    "A#x":[["Bb"],[29.14, 58.27,	116.54,	233.08,	466.16,	932.33,	1864.66, 3729.31, 7458.62,]],
};

const majorchords = {
    "C": ["C", "E", "G"],
    "D": ["D", "F#", "A"],
    "E": ["E", "G#", "B"],
    "F": ["F", "A", "C"],
    "G": ["G", "B", "D"],
    "A": ["A", "C#", "E"],
    "B": ["B", "D#", "F#"],
};

export {notes, accidentals, majorchords};