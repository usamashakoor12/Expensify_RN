import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyList = ({message}) => {
  return (
    <View className="flex justify-center items-center my-5 space-y-2">
        <Image className="w-36 h-36 shadow" source={require('../assets/Images/empty.png')}/>
      <Text className="font-bold text-gray-400">{message|| 'data not found'}</Text>
    </View>
  )
}

export default EmptyList

