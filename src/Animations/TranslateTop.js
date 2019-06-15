import React, { Component } from 'react'
import { Animated, Dimensions } from 'react-native'



class FadeIn extends Component {

    constructor(props) {
        super(props)

        this.opacity = new Animated.Value(-(Dimensions.get('window').width))
    }

    componentDidMount() {
        Animated.timing(
            this.opacity,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start()
    }

    render() {
        return (
            <Animated.View style={{ transform: [{ translateX: this.opacity }] }}>
                {this.props.children}
            </Animated.View>
        )
    }
}


export default FadeIn