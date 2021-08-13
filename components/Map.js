import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin } from "../slices/navSlice"
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const originn = { latitude: 37.3318456, longitude: -122.0296002 };
    const destinationn = { latitude: 37.771707, longitude: -122.4053769 };
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination])

//     useEffect (()=>{
//         if (!origin || !destination) return;
//      const getTravelTime = async ()=> {
// const URL = ''
//      };
//      getTravelTime();
//     },[origin,destination,GOOGLE_MAPS_APIKEY])


    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >


            <MapViewDirections
                origin={originn}
                destination={destinationn}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColors="black"
            />

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    identifier="origin"
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Destination"
                    identifier="destination"
                />
            )}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
