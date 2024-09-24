import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const ScreenWrapper = ({children}) => {
    const statuBarHight = StatusBar.currentHeight;
  return (
    <View style={{paddingTop: statuBarHight}}> 
        {
            children 
        }
    </View>
  )
}

export default ScreenWrapper