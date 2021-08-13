import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import {useDispatch} from 'react-redux'
import { setDestination , setOrigin} from "../slices/navSlice"
import PlacesInput from 'react-native-places-input';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {

const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`} >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
                <GooglePlacesAutocomplete
                    query={{
                        key: "AIzaSyDfXvJ91Nn308A1v0Iwn6BGmWo6mKfXDEI",
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    styles={{
                        container : {
                            flex: 0,
                        },
                        textInput : {
                            fontSize: 18,
                        }
                    }}
                    onPress= {(data,details=null)=> {
                        console.log(data);
                        dispatch(
                            setOrigin({
                            location : details.geometry.location,
                            description : data.description,
                        }))
                        dispatch(setDestination(null))

                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    enablePoweredByContainer= {false}
                    placeholder="Where are you ?"
                    debounce={400}
                />
                 
                 <NavOptions/>
                 <NavFavourites/>


            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
