import {StyleSheet} from 'react-native';

const colors = {
    sixty: '#FFCDB2',
    thirty: '#B5838D',
    ten: '#6D6875',
}

const styles = StyleSheet.create({
    lightScreenContainer: {
        flex: 1,
        backgroundColor: colors.sixty,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    darkScreenContainer: {
        flex: 1,
        backgroundColor: colors.ten,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.thirty,
        fontSize: 20,
        fontWeight: 'bold',
    },
    button : {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: colors.thirty,
        fontSize: 20,
        fontWeight: 'bold',
    },
    lightViewH: {
        backgroundColor: colors.sixty,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
    },
    lightViewV: {  
        backgroundColor: colors.sixty,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    darkViewV: {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'column',

    },
    darkViewH: {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
    },

  
});

export default styles;

