import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import OnBoardScreen from './src/views/screens/OnBoardScreen';

import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import {TrangchuScreen, KehoachbuaanScreen, NhacnhoScreen, NgayScreen, BaocaoScreen, LichsuScreen, CaidatScreen, OnboardScreen, DetailScreen, SignupScreen, DataScreen} from './src/views/screens/Menu'
import { TouchableOpacity } from 'react-native-gesture-handler';
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

const DrawerNavigator = createDrawerNavigator({
  OnBoardScreen: {
    screen: OnboardScreen,
    navigationOptions: {
      title: ''
    }
   
  },
  TrangchuScreen: {
    screen: TrangchuScreen,
    navigationOptions: {
      title: 'Trang chủ'
    }
  }, 
  

  KehoachbuaanScreen: {
    screen: KehoachbuaanScreen,
    navigationOptions: {
      title: 'Kế hoạch bữa ăn'
    }

  }, 
  NhacnhoScreen: {
    screen: NhacnhoScreen,
    navigationOptions: {
      title: 'Lịch sử'
    }
  }, 
  BaocaoScreen: {
    screen: BaocaoScreen,
    navigationOptions: {
      title: 'Báo cáo'
    }
  }, 
//  LichsuScreen: {
//   screen: LichsuScreen,
//   navigationOptions: {
//     title: 'Lịch sử'
//   }
//   }, 
 CaidatScreen: {
    screen: CaidatScreen,
    navigationOptions: {
      title: 'Cài đặt'
    }
   
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Đăng nhập'
    }
   
  },
  DataScreen: {
    screen: DataScreen,
    navigationOptions: {
      title: 'Nhắc nhở'
    }
   
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      title: ''
    }
   
  },
  NgayScreen: {
    screen: NgayScreen,
    navigationOptions: {
      title: ''
    }
   
  },
 
 
  
})

export default createAppContainer(DrawerNavigator);
