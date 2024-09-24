import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      //good to go
      navigation.goBack()
      navigation.navigate('Home');
    } else {
      //show error
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
           Sign In
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-80 w-80"
            source={require('../assets/Images/login.png')}
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
          <TouchableOpacity className="flex-row justify-end">
            <Text>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-lg text-white text-center font-bold">
           Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;
