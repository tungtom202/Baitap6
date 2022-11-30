import React from "react";
import { View, StyleSheet, useWindowDimensions, Image, Text, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function BgroundOnBoardingItems({ item }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.bground, { width }]} onTouchEnd={() => navigation.navigate('LandingScreen')} >
      <Image source={item.image} style={[styles.logo, { width, resizeMode: 'contain' }]} ></Image>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title_head} >{item.title}</Text>
        <Text style={styles.title_content}>{item.description_1}</Text>
        <Text style={styles.title_content}>{item.description_2}</Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  bground: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 241,

  },
  logo: {
    flex: 0.7,
    marginBottom: 50,
    justifyContent: 'center',
    color: '#000'
  },
  title_head: {
    color: '#000',
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
  },
  title_content: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,

  },
});