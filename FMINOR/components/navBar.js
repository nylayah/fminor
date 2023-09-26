import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { GameHomeScreen } from '../screens/GameHomeScreen';
import { ActiveGameScreen } from '../screens/ActiveGameScreen';
import { NoteEarTrainingSession } from '../screens/NoteEarTraining';
import { SessionSettings } from '../screens/SessionSettings';

export const navBar = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.navBarContainer}>
            <Pressable
             onPress={()=> navigation.navigate("TestHomeScreen")}>
                <Text>Home</Text>
            </Pressable>
            
            <Pressable
             onPress={()=> navigation.navigate("GameHomeScreen")}>
                <Text>Note Generator</Text>
            </Pressable>

            <Pressable
             onPress={()=> navigation.navigate("NoteEarTraining")}>
                <Text>Note Ear Training</Text>
            </Pressable>

            <Pressable
             onPress={()=> navigation.navigate("SessionSettings")}>
                <Text>Session Settings</Text>
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
        textColor: 'white'
    }
        
})