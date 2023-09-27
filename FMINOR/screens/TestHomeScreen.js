import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export const TestHomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
           <Text>Test Home Screen</Text>
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