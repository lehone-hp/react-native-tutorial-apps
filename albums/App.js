/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./src/components/Header/header.component";

export default class App extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Header headerText={'Albums'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      /*  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',*/
    },

});
