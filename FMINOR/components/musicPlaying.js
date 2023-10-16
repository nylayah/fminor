import {MotiView} from '@motify/components'
import * as React from 'react'
import {View} from 'react-native'
import {Easing} from 'react-native-reanimated'
import {Music} from 'react-native-feather'

const musicPlaying = ({currElement}) => {
    return (
        <View>
            {[...Array(3).keys()].map((index) => {
                return (
                    <MotiView
                    from={{opacity: 1, scale:1}}
                    animate={{opacity:0, scale:4}}
                    transition={{
                        type:'timing',
                        duration:2000,
                        easing: Easing.out(Easing.ease),
                        delay: index * 400,
                        loop: true,
                    }}
                    key={index}
                    style={[StyleSheet.absoluteFillObject]}
                    />
                )
            })}
            <Music/>

        </View>
    )
}

export default musicPlaying;