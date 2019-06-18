import React, { Component } from 'react'
import { Animated, Dimensions, Easing } from 'react-native'



class FadeIn extends Component {

    constructor(props) {
        super(props)

        this.opacity = new Animated.Value(Dimensions.get('window').width)
    }

    componentDidMount() {
        setTimeout(() => {
            Animated.timing(
                this.opacity,
                {
                    toValue: 0,
                    duration: 700,
                    easing: Easing.elastic(1),
                    delay: this.props.index * 200,
                    useNativeDriver: true,
                }
            ).start()
        }, 100)
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