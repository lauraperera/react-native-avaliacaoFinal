import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export function Button({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={estilo.submitButton}>{title}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    submitButton: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        margin: 15,
        height: 40,
        color: '#ffff',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10
    },
})

