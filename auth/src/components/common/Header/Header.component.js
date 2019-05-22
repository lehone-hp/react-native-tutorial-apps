import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={ styles.headerTextContainer }>
            <Text style={ styles.headerText }>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5
    }, headerText: {
        fontSize: 24,
    }
});

export {Header};
