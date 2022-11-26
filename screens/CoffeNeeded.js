import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

export default function CoffeNeeded() {
  return (
    <View style ={{
        margin: 15,
        alignItems: 'center',
        height: "100%"
    }}>
        <LottieView 
            style={{ height:500, alignSelf: 'center',marginBottom:30,marginTop:30}}
            source={require('../assets/animations/65721-coffeetea.json')}
            autoPlay
            speed={0.5}
        />
        <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
        }}>Coffee Needed</Text>
        <Text>Yang Buat Belum Ngopi Jadinya Ini Gak Dikerjain</Text>
    </View>
  )
}