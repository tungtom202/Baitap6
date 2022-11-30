import React from "react";
import ButtonLogin from "../../components/ButtonLogin";
import { View, StyleSheet, Text, Button, Image } from "react-native";


export default function OnBoarding() {

  return (
    <View style={styles.contain}>
      <Image source={require('../../assets/logocar1.png')} style={styles.logo} ></Image>
      <Text style={styles.title_head} >Welcome to auto car </Text>
      <Text style={styles.title_content}>Always with you every step of </Text>
      <Text style={[styles.title_content, { marginBottom: 60, }]}>the way.</Text>
      <ButtonLogin text='Continue' bgcolor='#5ea33a' color='white' nav='LoginScreen'>

      </ButtonLogin>

    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',


  },
  logo: {
    //tintColor: '#5ea33a',
    marginTop: 120,
    marginBottom: 40,
  },
  title_head: {
    marginBottom: 20,
    fontSize: 17,
    color: '#444',
  },
  title_content: {
    color: '#444',
    fontSize: 17
  },
})