import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './HomeScreen'
import Kehoachbuaan from '../navigations/Kehoachbuaan'
import Ngay from '../navigations/Ngay'
import Setting from '../navigations/Setting'
// import Lichsu from '../navigations/Lichsu'
import OnBoard from './OnBoardScreen'
import Details from './DetailsScreen'
import Signup from './SingupScreen'
import Data from './DataPicker'







export const TrangchuScreen = ({navigation}) => <HomeScreen navigation={navigation} name="Trang chủ" />
export const KehoachbuaanScreen = ({navigation}) => <Kehoachbuaan navigation={navigation} name="Kế hoạch bữa ăn" />
export const NhacnhoScreen = ({navigation}) => <Data navigation={navigation} name="Nhắc nhở" mode="date" />
export const BaocaoScreen = ({navigation}) => <HomeScreen navigation={navigation} name="Báo cáo" />
//export const LichsuScreen = ({navigation}) => <Lichsu navigation={navigation} name="Lịch sử" />
export const CaidatScreen = ({navigation}) => <Setting navigation={navigation} name="Cài đặt" />
export const DetailScreen = ({navigation}) => <Details navigation={navigation} name="Lịch sử" />
export const OnboardScreen = ({navigation}) => <OnBoard navigation={navigation} name="Cài đặt" />
export const NgayScreen = ({navigation}) => <Ngay navigation={navigation} name="Nhắc nhở" />
export const SignupScreen = ({navigation}) => <Signup navigation={navigation} name="Đăng ký" />
export const DataScreen = ({navigation}) => <Data navigation={navigation} name="Đăng ký" mode="time"/>
   









