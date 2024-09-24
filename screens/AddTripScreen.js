import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const AddTripScreen = () => {
  const [plase, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (plase && country) {
      //good to go
      navigation.navigate('Home');
    } else {
      //show error
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0">
            <BackButton />
          </View>

          <Text className={`${colors.heading} font-bold text-xl text-center`}>
            Add Trip
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-72 w-72"
            source={require('../assets/Images/4.png')}
          />
        </View>
        <View className="space-y-2 mx-2">
          <Text className={`${colors.heading} text-lg font-bold`}>
            Where On Earth?
          </Text>
          <TextInput
            value={plase}
            onChange={value => setPlace(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
          <Text className={`${colors.heading} text-lg font-bold`}>
            Which country
          </Text>
          <TextInput
            value={country}
            onChange={value => setCountry(value)}
            className="p-4 bg-white rounded-full mb-3"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-lg text-white text-center font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;
