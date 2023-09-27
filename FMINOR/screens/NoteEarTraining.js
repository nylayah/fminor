import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { notes } from "../notesandchords.js"
// import Sound from 'react-native-sound'

const gameDifficulty = {
    // easy - must choose right note
    easy:'easy',
    // hard - must choose the right note and octave
    hard:'hard'
}

const notesToPlay = {
    // infinite loop that returns notes for the user to play
    // notes given are limited to the gameDifficulty
    [gameDifficulty.easy]: async function() {
        const note = notes[Math.floor(Math.random() * notes.length)];
        const noteFrequency = notes[note][frequency];
        await playNote(noteFrequency);
        return note;
    },
    [gameDifficulty.hard]: async function() {
        const note = notes[Math.floor(Math.random() * notes.length)];
        const noteFrequency = notes[note][frequency];
        const octave = Math.floor(Math.random() * 8);
        await playNote(noteFrequency * Math.pow(2, octave));
        return { note, octave };
    }
}


export const NoteEarTrainingSession = () => {
    // loop that will play a frequency from notesToPlay
    // will display a number of random notes for the user to choose from (one of the notes will be the correct answer)
        // number of notes displayed will depend on the gameDifficulty
    // user must select the correct note associated with the audio frequency being played 
    
    const route = useRoute();
    const navigation = useNavigation();
    const gameDifficulty = route.params.gameDifficulty;

    const [noteToPlay,setNoteToPlay] = useState(null);

    // const playNote = async (noteFrequency) => {
    //     const [audio, setAudio] = useState(null);
        
    //     useEffect(() => {
    //         if (!noteFrequency) {
    //             return
    //         }
    //         const newAudio = new Sound(noteFrequency, Sound.MAIN_BUNDLE, (error) => {
    //             if (error) {
    //                 console.log(error);
    //                 return;
    //             }
    //             newAudio.play()
    //             setAudio(newAudio);
    //         });
    //         return () => {
    //             if(audio) {
    //                 audio.stop();
    //                 audio.release();
    //             }
    //         };
    //     }, [noteFrequency,audio]);
    // };
    
    const handleAnswer = async (answer) => {
        const correctAnswer = await notesToPlay[gameDifficulty]();
        if (answer === correctAnswer) {
            // display correct and move to next note
        } else {
            // display incorrect, stay on same note
        }
    }

    useEffect(() => {
        (async () => {
            setNoteToPlay(await notesToPlay[gameDifficulty]());
        })();
    }, [gameDifficulty]);
    if(!noteToPlay){
        return null;
    }

    const answerChoices = [];
    for (let i = 0; i < 8; i++){
        const answerChoice = notes[Math.floor(Math.random() * notes.length)];
        answerChoices.push(answerChoice);
    }
    
    noteToPlay = answerChoices.Math.floor(Math.random() * answerChoices.length);
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Note Ear Training Session</Text>
            <Text>Select the note you hear</Text>
            <View>
                {answerChoices.map((answerChoice) => (
                    <Pressable key ={answerChoice} onPress={() => handleAnswer(answerChoice)}>
                        <Text>{answerChoice}</Text>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
      
    },
  })