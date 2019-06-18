import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { Marker, Callout } from 'react-native-maps'
import ClusteredMapView from 'react-native-maps-super-cluster'
import styles from '../Styles/map'
import { MaterialIcons } from '@expo/vector-icons'

import { getAllMeasurements } from '../API/OpenRadiation/OpenRadiation'

const LATITUDE_DELTA = 14
const LONGITUDE_DELTA = LATITUDE_DELTA * (Dimensions.get('window').width / Dimensions.get('window').height)

class Maps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers: []
        }
        
    }


    componentWillMount = () => {
        let markers = []
        getAllMeasurements().then(data => {
            data.data.map((item) => {
                markers = [...markers, {
                    ...item,
                    location: {
                        latitude: item.latitude,
                        longitude: item.longitude
                    }
                }]
            })
            this.setState({ markers: markers })
        })
    }


    renderCluster = (cluster, onPress) => {
        const pointCount = cluster.pointCount,
              coordinate = cluster.coordinate,
              clusterId = cluster.clusterId
    
        const clusteringEngine = this.map.getClusteringEngine(),
              clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)
    
        return (
            <Marker coordinate={coordinate} onPress={onPress}>
                <View style={styles.myClusterStyle}>
                    <Text style={styles.myClusterTextStyle}>
                        {pointCount}
                    </Text>
                </View>
                    <Callout>
                        <ScrollView>
                            {clusteredPoints.map((p, index) => (
                                <Image key={index} source={p.image} />
                            ))}
                        </ScrollView>
                    </Callout>
            </Marker>
        )
    }


    renderMarker = (data) => <Marker key={data.reportUuid} coordinate={data.location} pinColor="#396afc" title={`${data.value}`} />


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ClusteredMapView
                    style={{ flex: 1 }}
                    data={this.state.markers}
                    initialRegion={{
                        latitude: 48.8534,
                        longitude: 2.3488,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    ref={(r) => { this.map = r }}
                    renderMarker={this.renderMarker}
                    renderCluster={this.renderCluster}
                    minZoom={5}
                    maxZoom={5}
                />
                

                <TouchableOpacity style={styles.go_back} onPress={() => this.props.navigation.navigate('Menu')}>
                        <MaterialIcons name="arrow-back" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default Maps