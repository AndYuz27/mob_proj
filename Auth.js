import React, {useState} from 'react';
import { StyleSheet, View,  Image, Text, Button ,TextInput} from 'react-native';


export default function Auth() {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [enableSecure, setEnableSecure] = useState(true);
    function toggleSecure() {
      setEnableSecure(value => !value)
    }

    return (
        <View style={ffgg.container}>
            <View style={ffgg.row}>
                <Text>Номер телефона +7</Text>
                <TextInput
    keyboardType="phone-pad"
    onChangeText={setText}
    defaultValue={text}
    placeholder="(800)5553535"
  />
  </View>
  <View style={ffgg.row}>
      <TextInput
        secureTextEntry={enableSecure}
        onChangeText={text1 => setText1(text1)}
        defaultValue={text1}
        placeholder="Password"
      /></View>
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
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  });
