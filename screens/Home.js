import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'


const YELP_API_KEY = "VETWFjxJNluXKZX2FNgivGMw3v8igbOuqsT6cL8XkRkVQraIW-4lwQEutIAthLhch1YownjY0BnFgYktmhRpE4YFFlfDWs2H3CgKvxrtIYV6qlLWlpLw8AuDl5l5Y3Yx"

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState ("San Francisco");
    const [activeTab, setActiveTab] = useState ("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses.filter((business) => 
                business.transactions.includes(activeTab.toLowerCase()) 
                )));
    };

    useEffect(()  => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
    <SafeAreaView style = {{backgroundColor: "#eee", flex: 1}}>
        <View style = {{backgroundColor: "white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab ={setActiveTab}/>
            <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData = {restaurantData} />
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
  )
}