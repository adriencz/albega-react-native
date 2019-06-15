import { StyleSheet, StatusBar, Platform } from 'react-native'

const styles = StyleSheet.create({
    app_container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: undefined
    }
})

export default styles