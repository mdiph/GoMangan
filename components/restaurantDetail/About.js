import { View, Text, Image } from 'react-native'
import React from 'react'

const image = 'https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=700&q=90'

const title = 'Warteg Gunawan 27'
const description = 'Indonesian '

export default function About() {
  return (
    <View>
      <RestaurantImage image = {image}/>
      <RestaurantTitle title = {title}/>
      <RestaurantDescription description = {description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source ={{uri: props.image}} style = {{width: "100%", height: 180,}}/>
);

const RestaurantTitle = (props) => (
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