import React from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function BgroundOnBoarding({ text, bgcolor, color, border, nav }) {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate(nav)} style={[styles.button, { backgroundColor: "#555", borderWidth: border, }]} >
            <View style={{}}>
                <Text style={[styles.text, { color: color }]}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 278,
        height: 53,
        borderRadius: 26,
        marginBottom: 20,

    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 13,

    },
})