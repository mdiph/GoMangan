import { View, Text, Image } from 'react-native'
import React from 'react'


const yelpRestaurantInfo = {
    name : "Ayam Goreng Spesial Gunawan",
    image: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=700&q=90",
    price: "$$",
    reviews: "200",
    rating: 4.5,
    categories: [{title: 'Indonesian'}, {title: 'Murah'}],
};


export default function About(props) {
    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(' • ');

    const description = `${formattedCategories} ${price ? ' • ' + price: ''} • 🎫 • ${rating} ⭐ (${reviews}+) `
  return (
    <View>
      <RestaurantImage image = {image}/>
      <RestaurantName name = {name}/>
      <RestaurantDescription description = {description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source ={{uri: props.image}} style = {{width: "100%", height: 180,}}/>
);

const RestaurantName = (props) => (
    <Text style = {{
        fontSize: 25,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text style = {{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15
        }}
    >
        {props.description}
    </Text>
)