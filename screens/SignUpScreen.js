import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { AuthCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit =async () => {
    if (email && password) {
      //good to go
      // navigation.goBack()
      // navigation.navigate('Home');

      await createUserWithEmailAndPassword(auth,email,password)
  
    } else {
      //show error
      Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor:'red'
      });
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View className="relative">
          <View className="absolute top-0 left-0">
            <BackButton />
          </View>

          <Text className={`${colors.heading} font-bold text-xl text-center`}>
           Sign Up
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-80 w-80"
            source={require('../assets/Images/signup.png')}
          />
        </View>
        <View className="space-y-2 mx-2">
          <Text className={`${colors.heading} text-lg font-bold`}>
           Email :
          </Text>
          <TextInput
            value={email}
            onChange={value => setEmail(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
          <Text className={`${colors.heading} text-lg font-bold`}>
         Password :
          </Text>
          <TextInput
            value={password}
            secureTextEntry
            onChange={value => setPassword(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-lg text-white text-center font-bold">
           Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;
