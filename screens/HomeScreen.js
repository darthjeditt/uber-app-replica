import React, { Component, useEffect, useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, RootTagContext } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import NavFavourites from '../components/NavFavourites';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = () => {

  const gpaRef = useRef(null);
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const [currentQuery, setCurrentQuery] = useState('');

  const fetchDetailsForDestination = async (destination) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(destination)}&inputtype=textquery&fields=geometry&key=${GOOGLE_MAPS_APIKEY}`);
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      const location = data.candidates[0].geometry.location;
      dispatch(setOrigin({
        location: {
          lat: location.lat,
          lng: location.lng,
        },
        description: destination,
      }));
    }
  }

  const handleFavouritePress = (destination) => {
    gpaRef.current.setAddressText(destination);
    fetchDetailsForDestination(destination);
  }
  console.log(origin)
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: 'https://links.papareact.com/gzs', }} />
        <GooglePlacesAutocomplete
          ref={gpaRef}
          placeholder="Enter a location"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            input: currentQuery,
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          onFail={error => console.error(error)}
        />
        <NavOptions />
        <NavFavourites onFavouritePress={handleFavouritePress} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;