import React, {useState, useEffect} from 'react';
import { StyleSheet, View,  Image, Text, Button ,TextInput,Alert, TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function Auth({navigation}) {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [enableSecure, setEnableSecure] = useState(true);
    function toggleSecure() {
      setEnableSecure(value => !value)
    }


    var base ={
      '+79156668877' : '2020',
      '+79145868587' : 'quest',
      '+74957856859' : 'apple',
      '+79994562200' : 'dev_game',
      '+78124587710' : 'mlp_onelove'
      }



    return (
        <View style={ffgg.container}>
          <View style={ffgg.row}>
            <View style={ffgg.PhoneContainert}>
                {/* <Text>Номер телефона +7</Text>
                <TextInput
    keyboardType="phone-pad"
    onChangeText={setText}
    defaultValue={text}
    placeholder="(800)5553535"
  /> */}
<PhoneInput defaultValue={phoneNumber}
            defaultCode="RU"
            onChangeFormattedText={(text)=>{
              setPhoneNumber(text)
            }}
            />


  </View>
  </View>
  <View style={ffgg.row}>
      <TextInput style={ffgg.pwd_inp}
        secureTextEntry={enableSecure}
        onChangeText={text1 => setText1(text1)}
        defaultValue={text1}
        placeholder="Password"
      /></View>
      <Button color="green" 
  onPress={() => {
    if(base[phoneNumber]==text1){
    navigation.navigate('PersonalAccount')
  }else{
    Alert.alert("неверные данные юзера" ,"Побробуйте ввести данные еще раз.")
  }
  }}
  title="войти"
/>
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
    PhoneContainert: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    pwd_inp:{
      margin: 10,
      width: "80%",
      padding: 20,
      backgroundColor: "#f8f9f9"
    }
  });
