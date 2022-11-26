import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function BottomTabs() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress ={() => navigation.navigate('GoManganInfo')}>
      <View style ={{
          flexDirection: "row", 
          margin: 10, 
          marginHorizontal: 30, 
          justifyContent:"space-evenly",
          }}
      >
        <Icon icon="home" text="GoMangan" />
      </View>
    </TouchableOpacity>
  )
}


const Icon = ({navigation, ...props}) => (
    <TouchableOpacity activeOpacity={1}>
        <View>
            <FontAwesome5 
                name = {props.icon} 
                size ={25} 
                style ={{
                    marginBottom: 3, 
                    alignSelf: "center",
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);