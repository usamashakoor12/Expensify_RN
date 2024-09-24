import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/Images/randomImage';
import EmptyList from '../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

export default function TripEpensesScreen({route}) {
    console.log('props',route.params)
    const {id, place, country} = route.params;
  const navigation = useNavigation();
  const items = [
    {id: 1, title: 'ate sandwitch', amount: 4,category:'food'},
    {id: 2, title: 'ate sandwitch', amount: 100,category:'other'},
    {id: 3, title: 'ate sandwitch', amount: 50,category:'shoping'},
    {id: 4, title: 'ate sandwitch', amount: 40,category:'entertainment'},
    {id: 5, title: 'ate sandwitch', amount: 50,category:'other'},
    {id: 6, title: 'ate sandwitch', amount: 90,category:'commute'},
    {id: 7, title: 'ate sandwitch', amount: 75,category:'food'},
  ];
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0">
            <BackButton />
          </View>

          <View>
          <Text className={`${colors.heading} font-bold text-xl text-center`}>
           {place}
          </Text>
          <Text className={`${colors.heading} text-xs text-center`}>
           {country}
          </Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require('../assets/Images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className="space-y-2">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
             Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expenses</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message={"you haven't recorded any expenses yet"} />
              }
              keyExtractor={item => item.id}
              className="mx-1"
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                        <ExpenseCard item={item} />
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
