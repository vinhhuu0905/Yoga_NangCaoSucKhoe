import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { Provider as PaperProvider, Appbar, List, Button, Paragraph, Dialog, Portal,  RadioButton} from 'react-native-paper';
import COLORS from '../../consts/colors';



const Setting = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const [value, setValue] = React.useState('first');


  
  return (
    <View>
    <View>
  <Appbar.Header>
    <Appbar.BackAction  />
    <Appbar.Content title="Setting" subtitle="Cài đặt" />
    <Appbar.Action icon="magnify" onPress={_handleSearch} />
    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
  </Appbar.Header>
  </View>
 <ScrollView>

  <View >
 
  <List.Item
   title="General"
// description="Item description"
  left={props => <List.Icon {...props}/>}

/>
<List.Item

  title="Chủ đề"
  description="Tối"
  left={props => <List.Icon {...props} />}
  onPress = {() => showDialog()}
/>
<List.Item

title="Ngôn ngữ"
description="Chưa đặt"
left={props => <List.Icon {...props} icon="translate"/>}

/>
</View>
<View>
<List.Item

title="Music"

left={props => <List.Icon {...props} />}

/>
<List.Item

title="Âm nhạc"
description="Phát nhạc khi tập luyện"
left={props => <List.Icon {...props} icon="music"/>}

/>
<List.Item

title="Âm luọng nhạc"

left={props => <List.Icon {...props} />}

/>
<List.Item

title="Bài hát âm nhạc"
description="Chưa đặt"
left={props => <List.Icon {...props} icon="music"/>}

/>
<List.Item

title="Chuông báo thức"
description="Đổ chuông khi bắt đầu và kết thúc bài tập"
left={props => <List.Icon {...props} icon="bell"/>}

/>
<List.Item

title="Thời gian nghĩ ngơi"
description="Chưa đặt"
left={props => <List.Icon {...props} icon="clock"/>}

/>


</View>
<View>
<List.Item

title="Voice Guide"

left={props => <List.Icon {...props} />}

/>
<List.Item

title="Hướng dẫn bằng giọng nói"
description="Sử dụng hướng dẫn bằng giọng nói khi tập luyện"
left={props => <List.Icon {...props} icon="voice"/>}

/>


</View>
<View>


<List.Item

title="Chia sẽ"

left={props => <List.Icon {...props} icon="share"/>}

/>

<List.Item

title="phản hồi"

left={props => <List.Icon {...props} icon="feedback"/>}

/>

</View>
</ScrollView>
<PaperProvider>
   <View>
  <Portal>
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Chủ đề</Dialog.Title>
      <Dialog.Content>
        <View>
          <View >
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
              <View >
                <Text>Tối</Text>      
                  <RadioButton value="first" />
              </View>
              <View>
                <Text>Sáng</Text>
                <RadioButton value="second" />
              </View>
              <View>
                <Text>Mặc định hệ thống</Text>
                <RadioButton value="third" />
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Huỷ</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
</View>
</PaperProvider>

</View>


);
  // return (
  //   <PaperProvider>
  //      <View>
  //     <Button onPress={showDialog}>Show Dialog</Button>
  //     <Portal>
  //       <Dialog visible={visible} onDismiss={hideDialog}>
  //         <Dialog.Title>Chủ đề</Dialog.Title>
  //         <Dialog.Content>
  //           <Paragraph>
  //              <View >
  //   <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
  //     <View >
     
  //       <Text>Tối</Text>
  //       <RadioButton value="first" />
  //     </View>
  //     <View>
  //       <Text>Sáng</Text>
  //       <RadioButton value="second" />
  //     </View>
  //     <View>
  //       <Text>Mặc định hệ thống</Text>
  //       <RadioButton value="second" />
  //     </View>
  //   </RadioButton.Group>
  //   </View></Paragraph>
  //         </Dialog.Content>
  //         <Dialog.Actions>
  //           <Button onPress={hideDialog}>Huỷ</Button>
  //         </Dialog.Actions>
  //       </Dialog>
  //     </Portal>
  //   </View>
  //   </PaperProvider>
   
  // );

 
    };

    export default Setting;