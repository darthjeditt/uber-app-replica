import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import NavFavourites from '../components/NavFavourites';
import { setDestination, setOrigin, selectPlaceHolder } from '../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const placeHolderText = useSelector(selectPlaceHolder);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: 'https://links.papareact.com/gzs', }} />
        <GooglePlacesAutocomplete
          placeholder={placeHolderText}
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
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          onFail={error => console.error(error)}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;