import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from "../../components/Categories";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "../../components/Recipes";

export default function Home() {

    const [activeCategory, setActiveCategory] = useState('Beef')
    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCategories()
        getRecipes()
    }, [])

    const handleChangeCategory = category => {
        getRecipes(category)
        setActiveCategory(category)
        setMeals([])
    }


    const getCategories = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
            if (response && response.data) setCategories(response.data.categories)

        } catch (error) {
            console.log(error)
        }
    }

    const getRecipes = async (category = 'Beef') => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            if (response && response.data) setMeals(response.data.meals)

        } catch (error) {
            console.log(error)
        }
    }

    const searchRecipe = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
            if (response.data.meals.length != null) setMeals(response.data.meals)
            setLoading(false)
        } catch (error) {
            console.log('Houve erro')
            setLoading(false)
        }

    }

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-14"
            >
                <View className="mx-4 flex-row justify-between items-center mb-2">
                    <Image
                        source={require('../../../assets/avatar.png')}
                        style={{ height: hp(5), width: hp(5.5), borderRadius: hp(5) }}
                    />
                    <BellIcon size={hp(4)} color="gray" />
                </View>

                <View className="mx-4 space-y-2 mb-2">

                    <Text
                        className="text-neural-600"
                        style={{ fontSize: hp(2) }}>
                        Hello, Alvaro!
                    </Text>
                    <View>
                        <Text
                            style={{ fontSize: hp(3.8) }}
                            className="font-semibold text-neural-600">
                            Make your food own food
                        </Text>
                    </View>

                    <Text
                        style={{ fontSize: hp(3.8) }}
                        className="font-semibold text-neural-600">at <Text className="text-amber-400">
                            home
                        </Text>
                    </Text>
                </View>

                <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
                    <TextInput
                        value={search}
                        onChangeText={(text) => searchRecipe(setSearch(text))}
                        style={{ fontSize: hp(3) }}
                        placeholderTextColor="gray"
                        placeholder="Search any recipe"
                        className="flex-1 text-base pl-3 tracking-wider"
                    />

                    <View className="bg-white rounded-full p-3">
                        <TouchableOpacity>
                            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    {
                        categories.length > 0 &&

                        <Categories
                            categories={categories}
                            activeCategory={activeCategory}
                            handleChangeCategory={handleChangeCategory}

                        />
                    }
                </View>
                <View>
                    {
                        loading ?
                            (
                                <View className="flex-1 flex justify-center items-center">
                                    <ActivityIndicator size="large" />
                                </View>
                            ) :
                            (
                                <Recipes meals={meals} categories={categories} />
                            )
                    }
                </View>

            </ScrollView>
        </View>
    )
}