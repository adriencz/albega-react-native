import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header_container: {
        left: 0,
        right: 0,
        top: 0,
        height: 75,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input_container: {
        flex: 1,
        height: 40,
        paddingRight: 10,
    },
    input_search: {
        flex: 1,
        height: 40,
        paddingRight: 10,
        paddingLeft: 40,
        backgroundColor: '#fafafa',
        borderRadius: 40,
    },
    search_icon: {
        position: 'absolute',
        top: 10,
        left: 13,
        opacity: 1,
    },
    menu_container: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // flexWrap: 'wrap',
        textAlign: 'center',
        marginLeft: 5,
        width: 30,
    },
    menu_circle: {
        width: '100%',
        height: 5,
        borderRadius: 1,
        margin: 1.5,
        backgroundColor: '#fafafa',
    }
})

export default styles