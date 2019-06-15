import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Measurements from '../Components/Measurements'
import Menu from '../Components/Menu'

const StackNavigator = createSwitchNavigator({
    Search: {
        screen: Measurements,
    },
    Menu: {
        screen: Menu
    }
})

export default createAppContainer(StackNavigator)