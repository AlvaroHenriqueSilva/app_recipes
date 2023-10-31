
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text,  Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Welcome() {

    const navigation = useNavigation();


    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 3500)

    }, [])

    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar style="light" />

            <View className="bg-white/20 rounded-full" style={{ padding: hp(5.5) }}>
                <View className="bg-white/20 rounded-full" style={{ padding: hp(5) }}>
                    <Image 
                        source={require('../../../assets/welcome.png')} 
                        style={{ width: hp(20), height: hp(20), borderRadius: hp(10) }} 
                    />
                </View>
            </View>

            <View className="flex items-center space-y-2">
            <Text 
                style={{ fontSize: hp(7) }}
                className="font-bold text-white tracking-widest">
                Recipes
            </Text>
            <Text 
                style={{ fontSize: hp(2) }}
                className="font-medium text-white tracking-widest">
                Eating is always good!
            </Text>
            </View>
        </View>
    )
}