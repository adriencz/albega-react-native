import React, { Component } from 'react'
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../Styles/measurements'
import { iOSUIKit, human } from 'react-native-typography'
import { Ionicons } from '@expo/vector-icons'
import FadeIn from '../Animations/FadeIn'

class MeasureItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const date = new Date(this.props.measure.startTime)
        return (
            <FadeIn index={this.props.index}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <View style={styles.measure_container}>
                        <View style={styles.measure_head}>
                            <Text style={styles.measure_rad}><Ionicons name="md-leaf" size={18} color="#53DD65" />  { this.props.measure.value.toFixed(3) } µSv/h</Text>
                            <Text style={styles.measure_date}>{ date.getDay() +'/'+ date.getMonth() +'/'+ date.getFullYear() }</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

export default MeasureItem