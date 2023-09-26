import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {navBar} from '../components/navBar'

export const TestHomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
           <Text>Test Home Screen</Text>
           <navBar/>
        </SafeAreaView>

    )
}