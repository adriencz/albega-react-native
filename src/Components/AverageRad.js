import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles/measurements'
import { LinearGradient } from 'expo'
import { human, iOSUIKit } from 'react-native-typography'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const Measure = () => (
    <LinearGradient colors={['#396afc', '#03199e']} style={styles.gradient_container} start={[0.0, 0.5]} end={[1.0, 0.5]}>
        <View style={styles.average_container}>
            <View style={styles.average_city_container}>
                <MaterialIcons name="location-on" size={24} color="#FFF" />
                <Text style={styles.average_city}>Boulogne sur Mer</Text>
            </View>
            <Text style={[human.largeTitle, styles.number_measurements]}>45 measurements</Text>
            <Text style={[human.largeTitle, styles.average_time]}>Total measuring time: 13:45:23</Text>
            <View style={styles.average_rad_container}>
                <View>
                    <MaterialIcons name="filter-list" size={28} color="#FFF" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="network-check" size={22} color="#FFF" />
                    <Text style={styles.average_rad}> 0.079 µSv/h </Text>
                </View>
            </View>
        </View>
    </LinearGradient>
)

// '#396afc', '#2948ff'

export default Measure