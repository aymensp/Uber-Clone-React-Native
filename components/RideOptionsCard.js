import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View ,SafeAreaView} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        image: "https://links.papareact.com/3pn",
        multiplier: 1,

    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        image: "https://links.papareact.com/5w8",
        multiplier: 1.2,

    },
    {
        id: "Uber-Lux-789",
        title: "Uber LUX",
        image: "https://links.papareact.com/7pf",
        multiplier: 1.75,

    },
]
const RideOptionsCard = () => {

   const navigation= useNavigation();
   const [selected,setSelected] = useState(null);
    return (
        <SafeAreaView
            style={tw`bg-white flex-grow ` }
        >
            <View  >
                <TouchableOpacity 
                onPress={() => navigation.navigate('NavigatorCard')}           
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text
                    style={tw`text-center py-5 text-xl`}
                >
                    Select a Ride
                </Text>
            </View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                
                renderItem={({ item:{id ,title,multiplier,image},item }) => (
                    <TouchableOpacity
                    onPress={() => setSelected(item)}
                    style={tw`flex-row justify-between items-center px-10
                     ${id === selected?.id && "bg-gray-200"}`}
                    >
                   
                         <Image
                         style={{
                             width: 100,
                             height: 100,
                             resizeMode:'contain'
                         }}
                         source={{
                             uri: image
                         }}
                         />
                         <View style={tw`-ml-6`}>
                             <Text style={tw`text-xl font-semibold`} >
                                 {title}
                             </Text>
                             <Text> Travel Time ... </Text>
                         </View>
                         <Text style={tw`text-xl`}>
                             99 $
                         </Text>

                    </TouchableOpacity>

                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}` }>
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
