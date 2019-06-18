import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    gradient_logo: {
        marginLeft: 0,
        marginRight: 0,
        // borderBottomWidth: 6,
        // borderColor: '#ced5ff'
    },
    logo: {
        fontFamily: 'odin',
        fontSize: 24,
        padding: 10,
        paddingTop: 25,
        paddingBottom: 0,
        paddingLeft: 30,
        marginBottom: 0,
        color: 'white',
    },
    menu_container: {
        padding: 20,
        paddingTop: 30,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu_item_openrad: {
        width: '100%',
        aspectRatio: 5.3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 15,
    },
    menu_item: {
        width: '100%',
        aspectRatio: 5.3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.08)',

    },
    first_item_container: {
        width: '25%',
        height: '100%',
        borderTopStartRadius: 100,
        borderBottomStartRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    first_item: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10)'
    },
    second_item_container: {
        width: '75%',
        height: '100%',
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    second_item: {
        width: '100%',
        height: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    second_item_text: {
        width: '100%',
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'coolvetica',
        fontSize: 21
    },
})

export default styles