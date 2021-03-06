import React, { Component } from 'react'
import { Animated, Dimensions, Easing } from 'react-native'



class FadeIn extends Component {

    constructor(props) {
        super(props)

        this.opacity = new Animated.Value(0)
    }

    componentDidMount() {
        setTimeout(() => {
            Animated.timing(
                this.opacity,
                {
                    useNativeDriver: true,
                    toValue: 1,
                    duration: 700,
                    easing: Easing.elastic(1),
                    delay: this.props.index * 200,
                }
            ).start()
        }, 100)
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.opacity }}>
                {this.props.children}
            </Animated.View>
        )
    }
}


export default FadeIn