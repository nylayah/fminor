import React from 'react';
import {Text, SafeAreaView, View, Pressable} from 'react-native';
import styles from '../assets/styling';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';





export default function AboutFMINOR() {
    const navigation = useNavigation();
    const lightMode = useSelector((state) => state.lightMode);

    const handleBack = () => {
        navigation.goBack();
    }

    return  (
        <SafeAreaView style= {lightMode ? styles.lightScreenContainer : styles.darkScreenContainer}>
            {/* About Header */}
            <View style={lightMode ? styles.lightHeader : styles.darkHeader}>
                    {/* Display Back Button */}
                    <Pressable style = {lightMode ? styles.backButtonL : styles.backButton} onPress={handleBack}>
                        <Text style={[lightMode ? styles.lightButtonText : styles.darkModeText, {textAlign:'left'}]}> ← </Text>
                    </Pressable>
                    
                </View>
            
            
            
            <Text>About FMINOR</Text>
        </SafeAreaView>
    )
}