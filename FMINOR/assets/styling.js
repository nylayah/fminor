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
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
    },
    lightHeader:{
        width: '100%',
        height: '10%',
        backgroundColor: colors.surface300L,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: 0,
      

    },
    lightModeText: {
        color: colors.secondarytext,
        fontSize: 20,
        textAlign: 'center',
    },
    lightButton : {
        backgroundColor: colors.primary500,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        color: 'black',
    },
    lightButtonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
       
    },
    lightViewH: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        
    },
    lightViewV: {  
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        

    },
    backButtonL: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: colors.secondarytext
    },
    // ----------------------------------------------Dark Theme----------------------------------------------------------
    darkScreenContainer: {
        flex: 1,
        backgroundColor: colors.surface100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    darkHeader:{
        width: '100%',
        height: '10%',
        backgroundColor: colors.surface200,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: 0,
    },
    
    darkModeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',    
    },
    darkButton : {
        backgroundColor: colors.primary500,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        color:'black'
    },
    darkButtonText: {
        color: colors.surface100,
        fontSize: 20,
        textAlign: 'center',
    },
    darkViewV: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    darkViewH: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    //--------------------------------Miscellaneous--------------------------------
    backButton: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: colors.primarytext
    }
});

export default styles;

