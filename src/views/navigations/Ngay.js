import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { RadioButton, Text, Appbar } from 'react-native-paper';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome';
import Ent from 'react-native-vector-icons/Entypo';

const MyComponent = ({navigation}) => {
   
  const [value, setValue] = React.useState('first');
  const _goBack = () => navigation.navigate('KehoachbuaanScreen');
  return (
      <View>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => _goBack()} />
      <Appbar.Content title="Ngày 1" />
      </Appbar.Header>
      <View style={{flexDirection: 'row'}}>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
      <View>
     
        <Text>Tiêu chuẩn</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Ăn chay</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
    </View>
   
    
    <View style={{
        justifyContent: 'space-between',
        marginTop: 15,
        marginLeft: 20,
      }}>
          <Icon name="egg" size={20} color='MediumBlue' ><Text color='DimGray'>Bữa ăn sáng</Text></Icon>
            <Text>-200g phô mai ít béo</Text>
            <Text>-1 quả(táo, lê, kiwi, cam, bưởi, quýt, đào, mơ)</Text>
            <Text>-Trà hoặc cà phê không đường và sữa</Text>
            <View style={{
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
            <Font name="lemon-o" size={20} color='brown'><Text color='DimGray' >Ăn nhanh</Text></Font>
            <Text>-Nướng táo với mật ong</Text>
            </View>
            <View style={{
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
            <Ent name="bowl" size={20} color='brown'><Text color='DimGray'>Bữa trưa</Text></Ent>
            <Text>-cá hoặc hải sản(mực, cua, tôm) 200-300g luộc hoặc nướng</Text>
            <Text>-1 quả dưa chuột</Text>
            <Text>-1 quả cà chua</Text>
            <Text>-Sandwich (bánh mì nguyên hạt với bơ)</Text>
            </View>
            <View style={{
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
            <Ent name="bowl" size={20} color='brown'><Text color='DimGray'>Bữa tối</Text></Ent>
            <Text>-trái cây(táo, lê, kiwi, cam, bưởi, mận, quýt)</Text>
            <Text>-kenfir 200ml với hàm lượng chất béo là 1% hoặc 2%</Text>
            </View>
         
          </View>
          
         
         

    </View>
  );
};

const style = StyleSheet.create({
  
});

export default MyComponent;