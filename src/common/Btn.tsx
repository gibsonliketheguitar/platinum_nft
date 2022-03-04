import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IBtn {
    title: string,
    handleOnPress?: () => void,
}

export default function Btn({ title, handleOnPress }: IBtn) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleOnPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%', //why isn't flex working 
    },
    button: {
        backgroundColor: "#506CCB",
        paddingVertical: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    title: {
        textAlign: "center",
        fontSize: 12,
        color: "#FFFFFF",
    }
});
