import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ActivityIndicator, Text, View } from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";
import RecipeCard from "../RecipeCard";


export default function Recipes({ categories, meals }) {

    const navigation = useNavigation()

    return (
        <View className="mx-4 space-y-3">
            <Text
                style={{ fontSize: hp(3) }}
                className="font-semibold text-neural-600">
                    Recipes
            </Text>

            <View>
                {
                    categories.length == 0 || meals.length == 0 ? 
                    (
                        <View className="flex-1 flex justify-center items-center">
                            <ActivityIndicator size="large" className="mt-20"/>
                        </View>
                        
                    ) : (
                        <MasonryList
                            data={meals}
                            keyExtractor={(item) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={
                                ({ item, index }) => <RecipeCard item={item} index={index} navigation={navigation} />}
                            onEndReachedThreshold={0.1}

                        />
                    )
                }
            </View>
        </View>
    )
}

