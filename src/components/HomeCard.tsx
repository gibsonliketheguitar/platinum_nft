import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CirclePagination } from "./CirclePagination";
import Btn from "../common/Btn";

export default function HomeCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Store your{"\n"}NFT collection</Text>
            <Text style={styles.h3}>This is a subtext that describes this{"\n"}feature in a better way</Text>
            <CirclePagination />
            <Btn title='next' />
        </View>
    )
}

//TODO use creatively solve the border card issue
const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#1A1D2D',
        padding: 32,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
        borderStyle: 'solid',
        borderTopColor: '#212434',
        borderWidth: 2,
    },
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
