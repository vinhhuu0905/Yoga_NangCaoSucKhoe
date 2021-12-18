import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[style.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={style.iconWrapper}>
        <FontAwesome name={btnType} style={style.icon} size={22} color={color} />
      </View>
      <View style={style.btnTxtWrapper}>
        <Text style={[style.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
 
export default SocialButton;
 
const style = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: 100,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});