import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RecipeDetail from '../screens/RecipeDetail';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='RecipeDetail' component={RecipeDetail} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}