import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'

class App extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Header headerText={"Authentication"} />
                <Text>My App!</Text>
            </View>
        );
    }
}

export default App;