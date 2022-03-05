import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Btn from "../common/Btn";
import Cards from "./Cards";
import { default as Pagination } from "./CirclePagination";

export default function HomeCard() {
    const [currIndex, setIndex] = useState(0)

    const handleIncrement = () => {
        setIndex(prev => ((prev + 1) % 3))
    }

    return (
        <View style={styles.container}>
            <Cards currIndex={currIndex} />
            <Pagination currIndex={currIndex} cards={[1, 2, 3]} />
            <Btn title='Next' handleOnPress={handleIncrement} />
        </View>
    )
}

//TODO use creatively solve the border card issue
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#1A1D2D',
        padding: 32,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
        borderBottomWidth: 0,
        borderStyle: 'solid',
        borderTopColor: '#212434',
        borderWidth: 2,
    }
});
