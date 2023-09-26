// import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {AudioContext, AnalyserNode} from 'web-audio-api';

// const audioContext = new AudioContext();
// const analyzer = audioContext.createAnalyser();

// analyzer.connect(audioContext.destination);

// const microphoneStream = await navigator.mediaDevices.getUserMedia({audio: true});

// microphoneStream.connect(analyzer);

// export function detectFrequency() {
//     // get frequency from analyzer node
//     const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
//     analyzer.getByteFrequencyData(frequencyData);

//     // find peak frequency (note that user is likely playing) in frequency data
//     let peakFrequency = 0;
//     for (let i = 0; i < frequencyData.length; i++){
//         if (frequencyData[i] > peakFrequency) {
//             peakFrequency = frequencyData[i];
//         }
//     }

// //convert peakFrequency to Hz
// const frequency = peakFrequency * audioContext.sampleRate / frequencyData.length;

// //return frequency
// return frequency;
// }

// export const NoteDetector = () => {
//     // loop that will play a frequency from notesToPlay
//     // will display a number of random notes for the user to choose from (one of the notes will be the correct answer)
//         // number of notes displayed will depend on the gameMode
//     // user must select the correct note associated with the audio frequency being played 
    
    
    
//     const [frequency, setFrequency] = useState(0);

//     useEffect (()=> {
//     const interval = setInterval(()=> {
//         setFrequency(detectFrequency());
//     }, 100);

//     return () => {
//         clearInterval(interval);
//     };
// }, []);
//     return (
//         <SafeAreaView>
//             <Text>"Frequency: " {frequency}</Text>
//             <navBar/>
//         </SafeAreaView>
//     )
// }