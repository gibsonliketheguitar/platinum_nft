import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <HeaderButton />
        </View>
    )
}

const HeaderButton = () => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => console.log('skip')}>
            <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
    )
}

//[ ]TODO figure out how to add the skip button elegantly
//[ ]TODO set global font family
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 36,
    },
    text: {
        //fontFamily: 'Montserrat',
        color: '#7C829F',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '600',
    }
});
