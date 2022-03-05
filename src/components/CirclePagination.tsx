import React from "react";
import { StyleSheet, View } from "react-native";

const CURR_DOT_SIZE = 10
const DOT_SIZE = 8
const DOT_SPACING = 10

interface ICirclePag {
    cards: Array<any>,
    currIndex: number
}

//[ ] TODO figure out how to do the dots
//https://github.com/Harin-Forks/react-native-animated-pagination-dots/blob/main/src/dots/ExpandingDot.tsx
export default function CirclePagination({ cards, currIndex }: ICirclePag) {
    return (
        <View style={styles.container}>
            {cards.map((_, index) => {
                return <View
                    key={index}
                    style={[styles.dot, (index === currIndex) ? styles.currDot : {}]}
                />
            })}
        </View>
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
