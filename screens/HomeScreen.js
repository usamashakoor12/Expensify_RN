import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/Images/randomImage';
import EmptyList from '../components/EmptyList';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
  const items = [
    {id: 1, place: 'Gujrat', country: 'Pakistan'},
    {id: 2, place: 'Gujrat', country: 'England'},
    {id: 3, place: 'Gujrat', country: 'America'},
    {id: 4, place: 'Gujrat', country: 'America'},
    {id: 4, place: 'Gujrat', country: 'America'},
    {id: 4, place: 'Gujrat', country: 'America'},
    {id: 4, place: 'Gujrat', country: 'America'},
  ];
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/Images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-2">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trip
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('AddTrip')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList 
          data={items}
          numColumns={2}
          ListEmptyComponent={<EmptyList message={"you haven't recorded any trip yet"}/>}
          keyExtractor={item => item.id}
          columnWrapperStyle={{
            justifyContent:'space-between'
          }}
          className="mx-1"
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>navigation.navigate('TripExpenses', {...item})} className="bg-white p-3 rounded-2xl mb-2 shadow-sm">
                    <View>
                        <Image source={randomImage()} className="w-36 h-36 mb-2"/>
                        <Text className={`${colors.heading} font-bold `}>{item.place}</Text>
                        <Text className={`${colors.heading} text-xs `}>{item.country}</Text>
                    </View>
                </TouchableOpacity>
            )
          }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
