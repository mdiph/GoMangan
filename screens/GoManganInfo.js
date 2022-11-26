import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"


export default function GoManganInfo() {
  return (
    <View style ={{
        margin: 15,
        alignItems: 'center',
        height: "100%"
    }}>
        <LottieView 
            style={{ height:450, alignSelf: 'center',marginBottom:30,marginTop:30}}
            source={require('../assets/animations/116541-a-small-shop.json')}
            autoPlay
            speed={0.5}
        />
        <Text style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: 'orange'
        }}>GoMangan</Text>
        <Text style={{fontSize:20, textAlign: 'center'}}>React Native Food Ordering Application That Uses Google Places API and Yelp API To Search Restaurant Around The World</Text>
        <Text style={{fontSize:10}}>Muhammad Dhiva Pradigta - 21120120140054</Text>
    </View>
  )
}