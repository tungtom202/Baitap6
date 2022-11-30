import React from "react";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";
import slides from "../data/slides";
import { AntDesign } from '@expo/vector-icons';

import BgroundOnBoardingItems from "../components/OnBoardingItems";

export default function BgroundOnBoarding() {
    return (
        <View style={styles.bground}>

            <View>
                <FlatList data={slides} renderItem={({ item }) => <BgroundOnBoardingItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.link}>Please press to continue </Text>
                <Text style={{ paddingTop: 34 }}>
                    <AntDesign name="rightcircleo" size={20} color="black" />
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    bground: {
        flex: 1,
        // backgroundColor: '#5ea33a',
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        marginBottom: 90,
        marginTop: 30,
        fontSize: 18,
        color: '#333',
        fontWeight: '600'
    },
});