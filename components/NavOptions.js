import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "1234",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",

    },
    {
        id: "45§",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",

    }
]
const NavOptions = () => {
    const origin = useSelector(selectOrigin);

    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={()=> navigation.navigate(item.screen)}
                    style={tw`p-2 pl-4 pb-8 pt-4 bg-gray-200 m-4 w-40`}
                    disabled={!origin}
                    >
                        
                        <View style={tw`${!origin && "opacity-20"}`}>
                         <Image
                         style={{
                             width: 130,
                             height: 130,
                             resizeMode:'contain'
                         }}
                         source={{
                             uri: item.image
                         }}
                         />
                         <Text 
                         style ={tw`mt-2 text-lg font-semibold`}
                         >
                             {item.title}
                         </Text>
                         <Icon
                         style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                         name="arrowright"
                         color= 'white'
                         type="antdesign"

/>
                            

                        </View>

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions

