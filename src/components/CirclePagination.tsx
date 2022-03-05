import React from "react";
import { Animated, StyleSheet, View } from "react-native";

const CURR_DOT_SIZE = 10
const DOT_SIZE = 8
const DOT_SPACING = 10

interface ICirclePag {
    cards: Array<any>,
    currIndex: number
}

export default function CirclePagination({ cards, currIndex }: ICirclePag) {
    return (
        <Animated.View style={styles.container}>
            {cards.map((_, index) => {
                return <View key={index} style={index === currIndex ? styles.currDot : styles.dot} />
            })}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 45,
        marginTop: 50,
        marginBottom: 28,
    },
    text: {
        color: '#f0f8ff',
        textAlign: 'center'
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        backgroundColor: '#7C829F',
        marginRight: DOT_SPACING,
    },
    currDot: {
        width: CURR_DOT_SIZE,
        height: CURR_DOT_SIZE,
        borderRadius: CURR_DOT_SIZE,
        backgroundColor: '#FFFFFF',
        marginRight: DOT_SPACING,
    }
});
