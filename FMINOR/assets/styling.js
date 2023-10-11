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
        textAlign: 'center',
    },
    lightModeText: {
        color: colors.thirty,
        fontSize: 20,
        fontWeight: 'bold',
    },
    lightButton : {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    lightButtonText: {
        color: colors.thirty,
        fontSize: 20,
        fontWeight: 'bold',
    },
    darkModeText: {
        color: colors.ten,
        fontSize: 20,
        fontWeight: 'bold',
    },
    darkButton : {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    darkButtonText: {
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
        textAlign: 'center',

    },
    darkViewH: {
        backgroundColor: colors.ten,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
    },

  
});

export default styles;

