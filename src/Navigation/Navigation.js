import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Measurements from '../Components/Measurements'
import Menu from '../Components/Menu'
import Maps from '../Components/Maps';


const StackSearch = createStackNavigator({
    Search: {
        screen: Measurements,
    },
})

const SwitchNavigator = createSwitchNavigator({
    Menu: {
        screen: Menu
    },
    Maps: {
        screen: Maps
    },
    Search: {
        screen: StackSearch,
    },
})

export default createAppContainer(SwitchNavigator)