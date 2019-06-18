import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../Styles/header'
import { iOSUIKit } from 'react-native-typography'
import { Ionicons } from '@expo/vector-icons'
import _ from 'lodash'
import { LinearGradient } from 'expo'

import NavigationService from '../Navigation/NavigationService'


class Header extends Component {
    render() {
        return (
            <LinearGradient colors={['#396afc', '#2948ff']} style={styles.gradient_container} start={[0.0, 0.5]} end={[1.0, 0.5]}>
                <View style={styles.header_container}>
                    <View style={styles.input_container}>
                        <TextInput style={[iOSUIKit.subheadEmphasized, styles.input_search]}
                            placeholder="Cherchez un lieu..."
                            placeholderTextColor="#afaaaa"
                            />
                        <Ionicons name='md-locate' style={styles.search_icon} size={19} color="#afaaaa" />
                    </View>
                    <TouchableOpacity onPress={() => NavigationService.navigate('Menu', { title: 'Menu' })}>
                        <View style={styles.menu_container}>
                            {_.times(3, (i) => <View style={styles.menu_circle} key={i}></View>)}
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}


export default Header