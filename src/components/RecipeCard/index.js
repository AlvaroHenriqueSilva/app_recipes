import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, {FadeInDown} from "react-native-reanimated";
import { Image, Pressable, Text, View } from "react-native";

const RecipeCard = ({ item, index, navigation }) => {

    let isEven = index % 2 === 0;

    return (
        <Animated.View 
            entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
            <Pressable
                style={{ 
                    width: '100%', 
                    paddingLeft: isEven ? 0:8,
                    paddingRight: isEven ? 0:8
                }}
                className="flex justify-center mb-4 space-y-1"
                onPress={() => navigation.navigate('RecipeDetail', {...item})}
            >
                <Image 
                    source={{ uri: item.strMealThumb }}
                    className="bg-black-5"

                    style={{ 
                        width: '100%', 
                        height: hp(35), 
                        borderRadius: 35
                    }}
                />

                <Text 
                    style={{ fontSize: hp(2) }}
                    className="font-semibold ml-2 text-neural-600">
                    {/* Se o tamanho da frase for maior que 20 caracteres */}
                    {
                        item.strMeal.length > 20 ? item.strMeal.slice(0,20)+'...': item.strMeal
                    }
                </Text>
            </Pressable>
        </Animated.View>
    )
}

export default RecipeCard;