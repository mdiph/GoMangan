import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
    title: "Ayam Goreng",
    description: "Ayam yang digoreng",
    price: "$14.20",
    image: "https://awsimages.detik.net.id/community/media/visual/2020/01/29/d26944bc-4731-4dda-bbd6-e9b9de25fbe2_43.jpeg?w=700&q=90"
  },
  {
    title: "Bebek Goreng",
    description: "Bebek yang digoreng",
    price: "$15.20",
    image: "https://asset.kompas.com/crops/y8jlET9Zwl-5iykdc5t58sS-_KY=/0x52:1000x719/750x500/data/photo/2020/07/14/5f0d253a6edd5.jpg"
  },
  {
    title: "Nasi Goreng",
    description: "Nasi yang digoreng",
    price: "$12.20",
    image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
  },
  
];

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <About route ={route}/>
      <Divider width={1.8} style = {{marginVertical:20}}/>
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation}/>
    </View>
  )
}