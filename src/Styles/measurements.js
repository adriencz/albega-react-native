import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    measurements_container: {
        flex: 1,
        padding: 0,
        backgroundColor: undefined
    },
    title_section: {
        marginTop: 15,
        marginBottom: 25,
        paddingLeft: 20,
        fontSize: 19
    },
    gradient_container: {
        marginBottom: 0,
        borderRadius: 0,
        borderBottomWidth: 6,
        borderColor: '#ced5ff'
    },
    average_container: {
        marginRight: 0,
        marginLeft: 0,
        paddingBottom: 5,
    },
    average_city_container: {
        height: 60,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.4)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    average_city: {
        color: 'white',
        fontSize: 22,
        marginLeft: 5,
        fontFamily: 'coolvetica',
        // paddingTop: 17,
    },
    number_measurements: {
        margin: 20,
        marginTop: 5,
        marginBottom: 0,
        padding: 0,
        color: 'white',
        fontSize: 17,
        fontFamily: 'rounded',
    },
    average_time: {
        margin: 20,
        marginTop: -10,
        marginBottom: 0,
        color: 'white',
        fontSize: 17,
        fontFamily: 'rounded',
    },
    average_rad_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 0
    },
    average_rad: {
        color: 'white',
        fontSize: 21,
        padding: 0,
        fontFamily: 'odin',
        paddingTop: 17,
    },


    filter_head: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
    },
    filter_text: {
        fontSize: 15,
        color: '#8f8888',
        marginRight: 7,
    },


    measure_container: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.07)',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    },
    measure_head: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    measure_rad: {
        fontSize: 17,
        flex: 1,
        fontFamily: 'odin'
    },
    measure_date: {
        fontSize: 14,
        flex: 1,
        textAlign: 'right',
        opacity: 0.6,
        fontFamily: 'rounded',
    }
})

export default styles