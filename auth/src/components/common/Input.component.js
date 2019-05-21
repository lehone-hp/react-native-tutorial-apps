import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center',
    }
});

export { Input };