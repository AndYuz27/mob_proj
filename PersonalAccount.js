import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Image, Text, Button } from 'react-native';
import jsonAPI from "./lessons.json"
const jsonAPI_1 = [{

  "id": "1",
  "lesson__name": "Основы Психологии",
  "group_less": "1ИТ2.20",
  "teacher_of_lesson": "Гроо Виктор Юрьевич",
  "data_lesson": [{
      "name_part": "Что такое Психология",
      "type_lesson": "Лекция",
      "img_header": "https://kartinkin.net/uploads/posts/2022-03/1647043124_1-kartinkin-net-p-kartinki-psikhologii-1.jpg",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper lectus eget ex congue lobortis. Nam ut interdum ex. Nunc a sagittis diam, at malesuada massa. Donec elementum justo justo, in ullamcorper velit finibus vel. Maecenas id diam eu libero sollicitudin interdum ut vel elit. Proin ac ante porttitor, faucibus lacus tristique, lobortis mi. Sed nec condimentum felis. Morbi a accumsan erat. Donec tortor neque, dapibus eget risus ut, congue condimentum enim. Quisque ullamcorper in mi non ornare. Curabitur sollicitudin sed magna quis vulputate. Vivamus in tortor quis quam elementum placerat at eget purus.",
      "task": ""
  },
  {
      "name_part": "Проверка",
      "type_lesson": "Тест/КТ",
      "img_header": "https://kartinkin.net/uploads/posts/2022-03/1647043124_1-kartinkin-net-p-kartinki-psikhologii-1.jpg",
      "text": "Вам надо выполнить тест, который прикреплен в категории: 'Task for you'",
      "task": "https://testometrika.com/personality-and-temper/find-out-your-psychological-age/"
  }
]
},{
  "id": "2",
  "lesson__name": "Право",
  "group_less": "1ИТ2.20",
  "teacher_of_lesson": "Гроо Виктор Юрьевич",
  "data_lesson": [{
      "name_part": "There's not yet",
      "type_lesson": "Лекция",
      "img_header": "https://kartinkin.net/uploads/posts/2022-03/1647043124_1-kartinkin-net-p-kartinki-psikhologii-1.jpg",
      "text": "Lorem ipsum dolor sit amet",
      "task": ""
  }
]

}]
const list = () => {
  return jsonAPI_1.map(element => {
    return (
      <View key={element.id} style={styles.card_les}>
        <Text>Предмет: {element.lesson__name}</Text>
        <Text>Группа: {element.group_less}</Text>
        <Text>Преподаватель: {element.teacher_of_lesson}</Text>
      </View>
    );
  });
};

export default function PersonalAccount({navigation}) {
let lessons = jsonAPI
console.log(lessons)


  return (
    <View style={styles.container}>
{list()}

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
  },
  card_les:{
    width: "75%",
    height: "15%",
    padding: 18,
    margin: 15,
    backgroundColor: "gray"
  }
});
