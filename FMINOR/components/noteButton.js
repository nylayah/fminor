import { StyleSheet, Text, Pressable } from 'react-native';
export const noteButton = ({note}) => {

    return (
        <View style = {styles.button}>
            <Text>{note}</Text>
        </View>
        // conditional view with image of fingering if level is easy
    )

}
const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      padding:'2%',
      marginHorizontal:5,
      borderWidth:'1px'

    },
});