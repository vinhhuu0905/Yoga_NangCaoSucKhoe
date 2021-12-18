import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView
 
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../consts/colors';
import {buttons} from '../../consts/buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Kehoachbuaan = ({navigation}) => {
   let list = []
   for(let i = 0; i < 31; i++) {
      list[i] = i+1;
   }
   let [listDate, setListDate] = React.useState(list);
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      
      <ImageBackground
        style={{height:200}}
        source={require('../../assets/thucan.jpg')}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.xam}
            onPress={() => navigation.navigate('TrangchuScreen')}
          /></View>
       <View style={style.menuTitle}>
           <Text style={style.name}>Kế hoạch thức ăn</Text>
        </View> 

     
        <View style={{height: 400, marginTop: 100,}}>
        <Button  title="Kế hoach thức ăn" mode="Outlined"  onPress={() => navigation.navigate('TrangchuScreen')}>
          {/* <Text >Kế hoach thức ăn</Text>         */}
        </Button>
        </View>
      
      </ImageBackground>
      <SafeAreaView>

      <ScrollView  showsVerticalScrollIndicator={false}>
         <View style = {style.container}>
         {
            listDate.map((item) => {
               return (
                  <TouchableOpacity
                  style={{
                     // flex-grow: 1;
                     // width: 33%;
                     flexGrow: 1,
                     width: '33%'
                  }}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('NgayScreen')}>
                  <Text style = {style.text}>
                     Ngày {item}
                  </Text>
              </TouchableOpacity>
               )
            })
         }
      </View>
     </ScrollView>
</SafeAreaView>
        
       
      </View>

    
  );
  
}



const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
 
  btn: {
    height: '50%',
   // width: 120,
    backgroundColor: COLORS.white,
  // marginTop: 20,
   // borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      //marginTop: 10,
  },
  name: {
      fontSize: 25,
      color:COLORS.purple,
      fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: COLORS.xanh,
    color: COLORS.white,
    borderColor:COLORS.white,
    
 }
});
export default Kehoachbuaan;
