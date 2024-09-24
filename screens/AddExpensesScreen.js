import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {_compileToken} from '../node_modules/css-select/lib/esm/index';
import {categories} from '../constants';

const AddExpensesScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleAddExpenses = () => {
    if (title && category && amount) {
      //good to go
      navigation.goBack();
    } else {
      //show error
    }
  };

  return (
    <ScrollView>
      <ScreenWrapper>
        <View className="flex justify-between h-full mx-4">
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className={`${colors.heading} font-bold text-xl text-center`}>
              Add Expenses
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require('../assets/Images/expenseBanner.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              value={title}
              onChange={value => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChange={value => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.value == category) bgColor = 'bg-green-200'
                return (
                  <TouchableOpacity
                    key={cat.value}
                    onPress={()=>setCategory(cat.value)}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleAddExpenses}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-lg text-white text-center font-bold">
                Add Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenWrapper>
    </ScrollView>
  );
};

export default AddExpensesScreen;
