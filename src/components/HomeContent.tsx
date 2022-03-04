import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeContent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text} > Will be replaced later once everything is designed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        color: '#7C829F',
        paddingHorizontal: 80,
    }
});
