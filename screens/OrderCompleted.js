import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native"
import firebase from "../firebase"
import MenuItems from '../components/restaurantDetail/MenuItems';

 
export default function OrderCompleted() {
    
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0 );

    const totalUSD = total.toLocaleString("en", {
        style: 'currency',
        currency: 'USD',
    })

  
  return (
    <SafeAreaView style = {{flex: 1,backgroundColor: "white"}}>
        <View style ={{
            margin: 15,
            alignItems: 'center',
            height:'100%'
        }}>
        <LottieView 
            style={{ height:100, alignSelf: 'center',marginBottom:30,marginTop:30}}
            source={require('../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
        />
        <Text style ={{fontSize:30, fontWeight:'bold'}}>GoMangan</Text>
        <Text style = {{fontSize: 15, textAlign:'center'}}>Your Order At {restaurantName} Has Been Ordered For {totalUSD}</Text>
        
            <LottieView 
                style={{ height:200, alignSelf: 'center', marginBottom:50}}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                speed={0.5}
            />
            
        </View>
    
    </SafeAreaView>
  )
}