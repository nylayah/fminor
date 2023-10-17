import {MotiView} from '@motify/components'
import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {Easing} from 'react-native-reanimated'
import {Feather} from '@expo/vector-icons'

const MusicPlaying = ({lightMode}) => {
    return (
        <View style = {localStyles.animContainer}>
            {[...Array(3).keys()].map((index) => {
                return (
                    <MotiView
                    from={{opacity: 1, scale:1}}
                    animate={{opacity:0, scale:4}}
                    transition={{
                        type: 'timing',
                        duration: 2000,
                        easing: Easing.out(Easing.ease),
                        delay: index * 400,
                        repeatReverse: false,
                        loop: true,
                    }}
                    key={index}
                    style={[StyleSheet.absoluteFillObject, localStyles.animContainer, lightMode ? {backgroundColor: '#7ba098'} : {backgroundColor: '#c3d4d0'}]}
                    />
                )
            })}
            <Feather name="music" size={32} />

        </View>
    )
}

const localStyles = StyleSheet.create({
    animContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    }
})



export default MusicPlaying;