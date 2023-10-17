import React from 'react';
import {SafeAreaView, Text, View, Pressable, StyleSheet} from 'react-native';
import styles from '../assets/styling';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { returnRandomNote, returnRandomChord, returnRandomNoteOrChord } from '../createnotechord';
import ChoiceSelection from '../components/ChoicesSelection';
import MusicPlaying from '../components/musicPlaying'




export default function ActiveGameScreen() {
    // navigation is a hook that allows us to navigate between screens
    const navigation = useNavigation();
    // importing session settings from redux store
    const difficulty = useSelector((state) => state.difficulty);
    const instrument = useSelector((state) => state.instrument);
    const practiceMode = useSelector((state) => state.practiceMode);
    const lightMode = useSelector((state) => state.lightMode);

    // constants for game length and number of choices
    const gameLengths = {
        'Easy': 10,
        'Medium': 20,
        'Hard': 30,
    }
    const numChoices = {
        'Easy': 4,  
        'Medium': 6,
        'Hard': 8,
    }

    // returns a dictionary of elements to play
    // [element(correctAnswer): [choices])]
    const elementsToPlay = () => {
        const lengths = gameLengths[difficulty];
        const elementsToPlay = {};
        for (let i = 0 ; i < lengths; i++) {
            switch (practiceMode) {
                case "Notes":
                    const note = returnRandomNote();
                    elementsToPlay[note]= elementsToChooseFrom(note);
                    break;
                case "Chords":
                    const chord = returnRandomChord();
                    elementsToPlay[chord]= elementsToChooseFrom(chord);
                    break;
                case "Both":
                    const noteOrChord = returnRandomNoteOrChord();
                    elementsToPlay[noteOrChord]= elementsToChooseFrom(noteOrChord);
                    break;
                default:
                    throw new Error (`Invalid practice mode: ${practiceMode}`);
            }
        }
        return elementsToPlay;

    }

    // returns an array of choices for users to select from including the correct answer 
    const elementsToChooseFrom = (correctAnswer) => {
        const choicesNum = numChoices[difficulty];
        const elementsToChooseFrom = [];

        elementsToChooseFrom.push(correctAnswer);

        for (let i = 0 ; i < choicesNum; i++) {
            switch (practiceMode) {
                case "Notes":
                    elementsToChooseFrom.push(returnRandomNote());
                    break;
                case "Chords":
                    elementsToChooseFrom.push(returnRandomChord());
                    break;
                case "Both":
                    elementsToChooseFrom.push(returnRandomNoteOrChord());
                    break;
                default:
                    throw new Error (`Invalid practice mode: ${practiceMode}`);
            }
        }
        return shuffleArray(elementsToChooseFrom);
    }
    
    // shuffles array of answers
    const  shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const [elements, setElements] = useState({});
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('')

    useEffect(() => {
        setElements(elementsToPlay());
      }, [difficulty, practiceMode, currentElementIndex]);
      

    // handles user choice
    const handleUserChoice = (choice) => () => {
        const currentElement = Object.keys(elements)[currentElementIndex];
        const isAnswerCorrect = evaluateUserInput(choice, currentElement);
      
        if (isAnswerCorrect) {
          setCurrentElementIndex((prevIndex) => {
            // If there are more elements, move to the next one
            if (prevIndex < Object.keys(elements).length - 1) {
              return prevIndex + 1;
            } else {
              alert('Game Over');
              return prevIndex; // No change if the game is over
            }
          });
        } else {
          setSelectedAnswer(choice);
          const selectedAnswerButton = document.querySelector(`button[value]="${choice}"]`);
          selectedAnswerButton.disabled = true;
        }
      }

    // evaluates user input
    const evaluateUserInput = (userChoice, correctAnswer) => {
        return userChoice === correctAnswer;
    };


    // handles back button -- for now this is how users in a session will change a setting or refresh a session
    const handleBack = () => {
        navigation.goBack();
    }   

    const currentElement = Object.keys(elements)[currentElementIndex];
    const choices = elements[currentElement];
    

    return  (
        <SafeAreaView style= {lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
            {/* <Text style ={lightMode ? styles.lightModeText : styles.darkModeText}>Active Game Screen</Text> */}
            
            {/* Game Header */}
            <View style={lightMode ? styles.lightHeader : styles.darkHeader}>
                {/* Display Back Button */}
                <Pressable style = {lightMode ? styles.backButtonL : styles.backButton} onPress={handleBack}>
                    <Text style={lightMode ? styles.lightButtonText : styles.darkModeText}> ← </Text>
                </Pressable>
                <View style={lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style ={lightMode ? styles.lightModeText : styles.darkModeText}>Difficulty: {difficulty}</Text>
                </View>
                <View style={lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style ={lightMode ? styles.lightModeText : styles.darkModeText}>Mode: {practiceMode}</Text>
                </View>
            </View>

            {/* Display Current Element */}
            <View>
                {/* <Text style ={lightMode ? styles.lightModeText : styles.darkModeText}>{currentElement}</Text> */}
                <View style ={{alignItems:'center'}}>
                    <MusicPlaying/>
                </View>
                
            </View>

            {/* Display Choices */}
            <View style={localStyles.choicesView}>
                <View style = {lightMode ? styles.lightViewV : styles.darkViewV}>
                    <Text style={lightMode ? styles.backButtonL : styles.backButton}> Which note is playing? </Text>   
                </View>
                {choices && choices.map((choice, index) => (
                        <Pressable 
                            key = {index} 
                            style={choice === selectedAnswer ? localStyles.red : styles.lightButton} 
                            onPress={handleUserChoice(choice)}>
                                <ChoiceSelection choice={choice} choiceDifficulty= {difficulty}/>
                        </Pressable>
                ))}

            </View>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    choicesView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignContent: 'center',
        paddingBottom: 150,
        
    },
    redHighlight: {
        backgroundColor: 'red',
    },
    grayOut: {
        backgroundColor: 'gray'
    },
}
)