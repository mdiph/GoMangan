import { View, Text } from 'react-native'
import React from 'react'

export default function OrderCompleted() {
  return (
    <View>
      <Text>GoMangan</Text>
      <Text>Your Order At {restaurantName} Has Been Ordered For {totalUSD}</Text>
    </View>
  )
}