import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Animated } from 'react-native'
import { getAllMeasurements } from '../API/OpenRadiation/OpenRadiation'
import { iOSUIKit } from 'react-native-typography'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import styles from '../Styles/measurements'
import AverageRad from './AverageRad'
import Measure from './Measure'
import Header from '../Partials/_Header';

class Measurements extends Component {

    constructor(props) {
        super(props)
        this.state = {
            measurements: []
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header: null,
    })

    componentWillMount = () => {
        getAllMeasurements().then(data => {
            this.setState({ measurements: data.data }, () => console.log(this.state.measurements))
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.measurements_container}>
                    <Header />
                    <AverageRad />
                    <AnimatedFlatList
                        data={this.state.measurements}
                        renderItem={({ item, index }) => <Measure index={index} measure={item} />}
                        keyExtractor={item => item.reportUuid}
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Measurements