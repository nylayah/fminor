import React, {useState, useEffect} from 'react';
import {AudioContext, AnalyserNode} from 'web-audio-api';




const audioContext = new AudioContext();
const analyzer = audioContext.createAnalyser();

analyzer.connect(audioContext.destination);

const microphoneStream = await navigator.mediaDevices.getUserMedia({audio: true});

microphoneStream.connect(analyzer);

export function detectFrequency() {
    // get frequency from analyzer node
    const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
    analyzer.getByteFrequencyData(frequencyData);

    // find peak frequency (note that user is likely playing) in frequency data
    let peakFrequency = 0;
    for (let i = 0; i < frequencyData.length; i++){
        if (frequencyData[i] > peakFrequency) {
            peakFrequency = frequencyData[i];
        }
    }

    //convert peakFrequency to Hz
    const frequency = peakFrequency * audioContext.sampleRate / frequencyData.length;

    //return frequency
    return frequency;
}
// following block of code goes inside of an app screen component
// const [frequency, setFrequency] = useState(0);

// useEffect (()=> {
//     const interval = setInterval(()=> {
//         setFrequency(detectFrequency());
//     }, 100);

//     return () => {
//         clearInterval(interval);
//     };
// }, []);


// // display
// // return (
// //     <div>
// //       <h1>Frequency: {frequency} Hz</h1>
// //     </div>
// //   );