import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Image, Text, Button } from 'react-native';

export default function PersonalAccount({navigation}) {
  return (
    <View style={styles.container}>
<Text>Pass</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
