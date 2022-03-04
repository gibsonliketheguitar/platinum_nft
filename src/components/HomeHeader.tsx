import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Logo</Text>
            <HeaderButton />
        </View>
    )
}

const HeaderButton = () => {
    return (
        <TouchableOpacity onPress={() => console.log('skip')}>
            <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
    )
}

//[ ]TODO figure out how to add the skip button elegantly
//[ ]TODO set global font family
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 28,
    },
    text: {
        fontFamily: 'Montserrat',
        color: '#7C829F',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '600',
    }
});
