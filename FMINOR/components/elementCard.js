// this is a visual component that displays an image associated with a chord or note
import { StyleSheet, Text, View } from 'react-native';
export const Card = ({note, difficulty}) => {

    return (
        <View style = {styles.card}>
            <Text>{note}</Text>
            <Text>{difficulty}</Text>
        </View>
        // conditional view with image of fingering if level is easy
    )

}
const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:'10%',
      padding:'20%',
      width:'1/4',
      height:'100%'

    },
});