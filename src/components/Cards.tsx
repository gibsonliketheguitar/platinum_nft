import React from "react"
import { StyleSheet, Text } from "react-native"

interface ICards {
    currIndex: number,
}

export default function Cards({ currIndex }: ICards) {
    const Cards = [<Card1 />, <Card2 />, <Card3 />]
    return (
        <>{Cards[currIndex]}</>
    )
}

const Card1 = () => {
    return (
        <>
            <Text style={styles.h2} > Store your{"\n"}NFT collection1</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </>
    )
}

const Card2 = () => {
    return (
        <>
            <Text style={styles.h2} > Store your{"\n"}NFT collection2</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </>
    )
}

const Card3 = () => {
    return (
        <>
            <Text style={styles.h2} > Store your{"\n"}NFT collection3</Text >
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
        </>
    )
}

const styles = StyleSheet.create({
    h2: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 34,
        paddingBottom: 12,
    },
    h3: {
        color: '#7C829F',
        textAlign: 'center',
        marginBottom: 11,
    }
});