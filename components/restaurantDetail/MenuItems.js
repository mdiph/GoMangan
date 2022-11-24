import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


const foods = [
  {
    title: "Ayam Goreng",
    description: "Ayam yang digoreng",
    price: "12.000",
    image: "https://awsimages.detik.net.id/community/media/visual/2020/01/29/d26944bc-4731-4dda-bbd6-e9b9de25fbe2_43.jpeg?w=700&q=90"
  },
  {
    title: "Bebek Goreng",
    description: "Bebek yang digoreng",
    price: "15.000",
    image: "https://asset.kompas.com/crops/y8jlET9Zwl-5iykdc5t58sS-_KY=/0x52:1000x719/750x500/data/photo/2020/07/14/5f0d253a6edd5.jpg"
  },
  {
    title: "Nasi Goreng",
    description: "Nasi yang digoreng",
    price: "10.000",
    image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
  },
  {
    title: "Nasi Goreng",
    description: "Nasi yang digoreng",
    price: "10.000",
    image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
  },
  {
    title: "Nasi Goreng",
    description: "Nasi yang digoreng",
    price: "10.000",
    image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
  },
];


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  }
})

export default function MenuItems({restaurantName}) {
  const dispatch = useDispatch();
  
  const selectItem = (item, checkboxValue) => 
  dispatch({
    type: "ADD_TO_CART", 
    payload: {
      ...item, 
      restaurantName: restaurantName,
      checkboxValue: checkboxValue,
    },
  })

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
    )

  const isFoodInCart = (food, cartItems) => 
    Boolean(cartItems.find((item) => item.title === food.title))

  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
      {foods.map((food, index) => (
        <View key = {index}>
          <View style = {styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle= {{borderColor: 'lightgray'}}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food,checkboxValue)}
              isChecked = {isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food}/>
            <FoodImage food={food}/>
          </View>
          <Divider 
            width={0.5} 
            orientation="vertical" 
            style = {{marginHorizontal:20}}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style = {{
    width: 240, justifyContent: "space-evenly"
  }}>
    <Text style ={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image 
    source={{uri: props.food.image}} 
    style = {{
      width: 100, 
      height: 100, 
      borderRadius: 8,
      
    }}/>
  </View>
)