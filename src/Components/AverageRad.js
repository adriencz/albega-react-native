import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles/measurements'
import { LinearGradient } from 'expo'
import { human, iOSUIKit } from 'react-native-typography'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import AnimateNumber from 'react-native-countup'

const Measure = () => (
    <LinearGradient colors={['#396afc', '#2948ff']} style={styles.gradient_container} start={[0.0, 0.5]} end={[1.0, 0.5]}>
        <View style={styles.average_container}>
            <View style={styles.average_city_container}>
                <MaterialIcons name="location-on" size={22} color="#FFF" />
                <Text style={[human.title1, styles.average_city]}>{'Boulogne-sur-Mer'}</Text>
            </View>
            <Text style={[human.largeTitle, styles.number_measurements]}>45 measurements</Text>
            <Text style={[human.largeTitle, styles.average_time]}>Total measuring time: 13:45:23</Text>
            <View style={styles.average_rad_container}>
                <View>
                    <MaterialIcons name="filter-list" size={30} color="#FFF" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="network-check" size={27} color="#FFF" style={{ paddingLeft: 5 }} />
                    <Text style={styles.average_rad}>
                        <AnimateNumber value={0.79} formatter={(val) => ' '+parseFloat(val).toFixed(2)} interval={20} countBy={0.01} />
                    </Text>
                </View>
            </View>
        </View>
    </LinearGradient>
)

// '#396afc', '#2948ff'

export default Measure