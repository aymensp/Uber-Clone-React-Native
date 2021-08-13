import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigatorCard from '../components/NavigatorCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <View>
           
            <View 
            style= {tw`h-1/2`}
            >
                <Map/>

            </View>
            <View 
            style= {tw`h-1/2`}
            >
                <Stack.Navigator>
                <Stack.Screen 
            name="NavigatorCard" 
            component={NavigatorCard} 
            options={{
              headerShown : false,

            }}
            />
                <Stack.Screen 
            name="RideOptionsCard" 
            component={RideOptionsCard} 
            options={{
              headerShown : false,

            }}
            />
                </Stack.Navigator>

            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
