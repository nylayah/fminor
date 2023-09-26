import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { GameHomeScreen } from '../screens/GameHomeScreen';
import { ActiveGameScreen } from '../screens/ActiveGameScreen';
import { NoteEarTrainingSession } from '../screens/NoteEarTraining';
import { SessionSettings } from '../screens/SessionSettings';

export const NavBar = () => {

    const navigation = useNavigation();

    const route = useRoute();

    

    // const instrument = route.params.instrument;
    // const gameMode = route.params.gameMode;
    // const gameDifficulty = route.params.gameDifficulty;

    return (
        <View style = {styles.navBarContainer}>
            <Pressable
             style = {styles.button}
             onPress={()=> navigation.navigate("TestHomeScreen")}>
                <Text style = {{color:"white"}}>Home</Text>
            </Pressable>
            
            <Pressable
             style = {styles.button}
             onPress={()=> navigation.navigate("GameHomeScreen")}>
                <Text style = {{color:"white"}}>Note Generator</Text>
            </Pressable>

            <Pressable
             style = {styles.button}
             onPress={()=> navigation.navigate("NoteEarTraining")}>
                <Text style = {{color:"white"}}>Note Ear Training</Text>
            </Pressable>

            <Pressable
             style = {styles.button}
             onPress={()=> navigation.navigate("SessionSettings")}>
                <Text style = {{color:"white"}}>Session Settings</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: 'black',
        color: 'white',
        flexDirection: 'row',
        bottom: 0,
        textColor: 'white',
        width:'100%',
        justifyContent:'space-evenly'
    },
    button: {
        borderWidth: '1px',
        borderColor: 'white'

    }
        
})