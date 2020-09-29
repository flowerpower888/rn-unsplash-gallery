import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './../screens/Home';
import { Details } from './../screens/Details';


const Stack = createStackNavigator()

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#101010',
                        borderBottomWidth: 0
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false
                }}
                headerMode='float'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name='Details'
                    component={Details}
                    options={({ route }) => ({
                        post: route.params.post
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator