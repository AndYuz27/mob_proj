import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Image, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hdr_img}><Image source={{uri: 'https://avatars.mds.yandex.net/i?id=0cbd10dd03064100cdd699c66595f04eda0b3e17-7863844-images-thumbs&n=13'}} style={{width: 250, height: 250}} />
      </View>
      <Text>Добро пожаловать в учебную платформу "Tolstoy"</Text>
      <View style={styles.hdr_btn}>
      <Button color="green" 
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Авторизоваться"
/>
      </View>
      
 <StatusBar style="auto" />
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
