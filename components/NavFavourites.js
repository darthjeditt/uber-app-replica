import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaceHolder, setOrigin } from '../slices/navSlice';


const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Gold Coast QLD, Australia',
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Brisbane QLD, Australia',
    },
];


const NavFavourites = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePress = (destination, location) => {
        if (data.location == 'Home') {
            dispatch(setPlaceHolder(destination));
        }
        navigation.navigate('MapScreen')
    };

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]}  />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity onPress={() => handlePress(destination, location)} style={tw`flex-row items-center p-5`}>
                    <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`} >{location}</Text>
                        <Text style={tw`text-gray-500`} >{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavFavourites

const styles = StyleSheet.create({})