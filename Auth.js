import React from 'react';
import { StyleSheet, View,  Image, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Auth() {
    return (
        <View style={ffgg.container}>
          <Text>Add friends here!</Text>
        </View>
    )
}

const ffgg = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hdr_img:{
      margin: 25
    },
    hdr_txt: {
  
    },
    hdr_btn:{
      margin: 15
    }
  });
