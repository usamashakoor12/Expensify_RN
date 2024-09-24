import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingLeft: 10, paddingTop: 2}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: 'white',
          borderRadius: 50,
          height: 32,
          width: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}} // Increase touchable area
      >
        <Feather name="chevron-left" size={30} color={colors.button} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
