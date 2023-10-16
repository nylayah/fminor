import {StyleSheet} from 'react-native';

const colors = {
    sixty: '#FFCDB2',
    thirty: '#B5838D',
    ten: '#6D6875',
    
    // -----------------------------------------Light Theme----------------------------------------------------

    // light color surface shades
    surface100L: '#f1f5f4',
    surface200L: '#f3f6f5',
    surface300L: '#f4f7f6',
    surface400L: '#f6f8f8',
    surface500L: '#f7f9f9',
    surface600L: '#f9fbfa',
    
    // ------------------------------------------Dark Theme-------------------------------------------------------
    // primary color shades
    primary100: '#7ba098',
    primary200: '#89aaa3',
    primary300: '#98b5ae',
    primary400: '#b4c9c5',
    primary500: '#c3d4d0',

    // dark color surface shades
    surface100: '#121212',
    surface200: '#282828',
    surface300: '#3f3f3f',
    surface400: '#575757',
    surface500: '#717171',
    surface600: '#8b8b8b',

    //text
    primarytext: '#e4e4e7',
    secondarytext: '#71717a'
}

const styles = StyleSheet.create({

    // -----------------------------------------Light Theme-------------------------------------------------------
    lightScreenContainer: {
        flex: 1,
        backgroundColor: colors.surface100L,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    lightModeText: {
        color: 'black',
        fontSize: 20,
    },
    lightButton : {
        backgroundColor: colors.primary500,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        color: 'black'
    },
    // lightButtonText: {
    //     color: colors.thirty,
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
    lightViewH: {
        backgroundColor: colors.surface200L,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
    },
    lightViewV: {  
        backgroundColor: colors.surface200L,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    // ----------------------------------------------Dark Theme----------------------------------------------------------
    darkScreenContainer: {
        flex: 1,
        backgroundColor: colors.surface100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    
    darkModeText: {
        color: 'white',
        fontSize: 20,
    },
    darkButton : {
        backgroundColor: colors.primary500,
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    darkButtonText: {
        color: colors.surface100,
        fontSize: 20,
    },
    darkViewV: {
        backgroundColor: colors.surface200,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'column',
        textAlign: 'center',

    },
    darkViewH: {
        backgroundColor: colors.surface200,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
    },

  
});

export default styles;

