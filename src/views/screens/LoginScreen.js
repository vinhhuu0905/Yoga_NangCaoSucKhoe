import SocialButton from '../Login/SocialButton';
const LoginScreen = ({navigation}) => {
  //...
 
  return (
    <View style={style.container}>
      //...
 
      <SocialButton 
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      
      <SocialButton 
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />
 
      //...
    </View>
  );
};
 
export default LoginScreen;