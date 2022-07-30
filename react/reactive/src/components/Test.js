import React from "react"

import { Text, StyleSheet } from 'react-native'

const Test = () => {
    return (
        <Text style={styles.text}>Test Component with StyleSheet</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 12,
        paddingHorizontal: 24,
        color: 'red'
    },
});

export default Test