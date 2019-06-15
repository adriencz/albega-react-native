import React, { Component } from 'react'
import { ScrollView, Text, View , TouchableOpacity } from 'react-native'
import styles from '../Styles/menu'
import { LinearGradient } from 'expo'
import { iOSUIKit } from 'react-native-typography'
import { MaterialIcons } from '@expo/vector-icons'
import FadeIn from '../Animations/FadeIn';


class Menu extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <LinearGradient colors={['#396afc', '#03199e']} start={[0.0, 0.5]} end={[1.0, 0.8]} style={styles.gradient_logo}>
                    <Text style={styles.logo}>ALBEGA</Text>
                </LinearGradient>
                <View style={styles.menu_container}>
                    <FadeIn index={1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                            <View style={styles.menu_item}>
                                <View style={styles.first_item_container}>
                                    <View style={styles.first_item}>
                                        <MaterialIcons name="location-on" size={32} />
                                    </View>
                                </View>
                                <View style={styles.second_item_container}>
                                    <View style={styles.second_item}>
                                        <Text style={styles.second_item_text}>Search</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </FadeIn>
                    <FadeIn index={2}>
                        <TouchableOpacity>
                            <View style={styles.menu_item}>
                                <View style={styles.first_item_container}>
                                    <View style={styles.first_item}>
                                        <MaterialIcons name="map" size={32} />
                                    </View>
                                </View>
                                <View style={styles.second_item_container}>
                                    <View style={styles.second_item}>
                                        <Text style={styles.second_item_text}>Open Map</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </FadeIn>
                    <FadeIn index={3}>
                        <TouchableOpacity>
                            <LinearGradient colors={['#396afc', '#03199e']} start={[0.0, 0.5]} end={[1.0, 0.8]} style={styles.menu_item_openrad}>
                                <View style={styles.first_item_container}>
                                    <View style={[styles.first_item, { borderColor: 'rgba(255, 255, 255, 0.3)' }]}>
                                        <MaterialIcons name="network-check" size={32} color="#FFF" />
                                    </View>
                                </View>
                                <View style={styles.second_item_container}>
                                    <View style={styles.second_item}>
                                        <Text style={[styles.second_item_text, { color: 'white' }]}>OpenRadiation</Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </FadeIn>
                    <FadeIn index={4}>
                        <TouchableOpacity>
                            <View style={styles.menu_item}>
                                <View style={styles.first_item_container}>
                                    <View style={styles.first_item}>
                                        <MaterialIcons name="info-outline" size={32} />
                                    </View>
                                </View>
                                <View style={styles.second_item_container}>
                                    <View style={styles.second_item}>
                                        <Text style={[iOSUIKit.title3Emphasized, styles.second_item_text]}>Infos</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </FadeIn>
                </View>
            </ScrollView>
        )
    }
}


export default Menu