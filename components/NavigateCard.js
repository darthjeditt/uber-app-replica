import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
import { useState, useRef } from 'react'


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    const gpaRef = useRef(null);


    const fetchDetailsForDestination = async (destination) => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(destination)}&inputtype=textquery&fields=geometry&key=${GOOGLE_MAPS_APIKEY}`);
        const data = await response.json();
        if (data.candidates && data.candidates.length > 0) {
        const location = data.candidates[0].geometry.location;
        dispatch(setDestination({
            location: {
            lat: location.lat,
            lng: location.lng,
            },
            description: destination,
        }));
        }
    }

    const handleFavouritePress = (destination) => {
        if (gpaRef.current) {
            gpaRef.current.setAddressText(destination);
            fetchDetailsForDestination(destination);
        }
    };
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning King</Text>
            <View>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <GooglePlacesAutocomplete
                        ref={gpaRef}
                        placeholder='Where to?'
                        defaultValue={inputText}
                        styles={styles}
                        fetchDetails={true}
                        returnKeyType={'search'}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            )
                            navigation.navigate('RideOptionsCard')
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />

                </View>
                <NavFavourites onFavouritePress={handleFavouritePress} />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`} onPress={() => navigation.navigate('RideOptionsCard')}>
                    <Icon name='car' type='font-awesome' color='white' size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})