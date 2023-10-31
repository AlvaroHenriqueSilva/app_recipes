import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Categories = ({ categories, activeCategory, handleChangeCategory }) => {

    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categories.map((category, index) => {

                        let isActive = category.strCategory === activeCategory
                        let activeButtonClass = isActive ? ' bg-amber-400' : ' bg-black-10'

                        return (
                            <TouchableOpacity
                                key={index}
                                className="flex items-center space-y-1"
                                onPress={() => handleChangeCategory(category.strCategory)}
                            >
                                <View className={`rounded-full p-[6px] ${activeButtonClass}`}>
                                    <Image
                                        source={{ uri: category.strCategoryThumb }}
                                        style={{ width: hp(6), height: hp(6) }}
                                        className="rounded-full"
                                    />
                                </View>

                                <Text 
                                    className="text-neural-600" 
                                    style={{ fontSize: hp(2) }}>
                                        {category.strCategory}
                                </Text>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Animated.View>
    )
}

export default Categories;