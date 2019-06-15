import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './src/Styles/app'
import { Font, AppLoading } from 'expo'

// Components & Partials
import Header from './src/Partials/_Header'
import Navigation from './src/Navigation/Navigation'
import NavigationService from './src/Navigation/NavigationService'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = { loading: true }
  }


  async componentDidMount() {
    await Font.loadAsync({
      'rounded': require('./assets/fonts/rounded_el.ttf'),
      'odin': require('./assets/fonts/odin.otf'),
      'coolvetica': require('./assets/fonts/coolvetica_rg.ttf')
    }).then(() => this.setState({ loading: false }))
  }


  render() {
    if (this.state.loading) {
      return (
        <AppLoading />
      )
    }
    return (
        <View style={styles.app_container}>
            {/* <Header /> */}
            <Navigation ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)} />
        </View>
    )
  }
}

export default App