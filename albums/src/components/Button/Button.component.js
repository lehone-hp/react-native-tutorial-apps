import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Click Me!
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10,
    },
    button: {
        flex: 1,    // expand button and fill as much content as possible
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginHorizontal: 5,

    }
});

export default Button;