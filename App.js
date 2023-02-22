import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View,  Image, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Title from './Title';
import Auth from './Auth';
import PersonalAccount from './PersonalAccount';
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Title}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
          />
          <Stack.Screen
            name="PersonalAccount"
            component={PersonalAccount}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
