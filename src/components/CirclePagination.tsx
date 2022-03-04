import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CirclePagination() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text}>3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 45,
        marginTop: 50,
        marginBottom: 27,
    },
    text: {
        color: '#f0f8ff',
        textAlign: 'center'
    }
});
