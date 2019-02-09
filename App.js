import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {observer} from 'mobx-react'
import User from './mobx/storge/User'

@observer
class App extends Component {
  render() {
    return (
      <View>
        <Text> textInCompsssonent {User.getUsername} </Text>
      </View>
    )
  }
}

export default App