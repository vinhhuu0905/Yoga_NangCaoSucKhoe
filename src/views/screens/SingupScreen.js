import React, {useEffect} from 'react';
import {View} from 'react-native'
import SocialButton from '../Login/SocialButton';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
 
const SignupScreen = ({navigation}) => {
  useEffect(() => {
    // initialize the Google SDK
    //YOUR_WEB_CLIENT_ID là chi á
    GoogleSignin.configure({
      webClientId: '858178829126-v0btmti550sd15mr2trlhel40889ru75.apps.googleusercontent.com',
    });
  }, []);
  //...
  const onFacebookButtonPress = async() => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const googleLogin = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  //alo
  return (
    <View style={{alignItems: 'center', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <View>
      <SocialButton 
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => onFacebookButtonPress()}
      />

      </View>
      <View>

      <SocialButton 
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => googleLogin()}
      />
      </View>
 
    </View>
  );
};
 
export default SignupScreen;