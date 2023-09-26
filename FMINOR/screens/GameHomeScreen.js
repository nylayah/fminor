import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavBar } from '../components/NavBar.js'



export const GameHomeScreen = () => {
    
  
    return (
      <SafeAreaView style={styles.container}>
        <Text>Game Home Screen</Text>
        <NavBar/>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0BE',
      alignItems: 'center',
      
    },
  })
  