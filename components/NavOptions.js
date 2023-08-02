import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data  = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen',
    }
]



export default class NavOptions extends Component {
  render() {
    return (
        <FlatList 
        data={data}
        horizontal 
        keyExtractor={(item) => item.id} 
        renderItem={({item}) => (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 flex flex-row`}>
              <View>
                <Image
                    style={{width: 120, height: 120, resizeMode: 'contain',}}
                    source={{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name='arrowright'
                    color='white'
                    type='antdesign'
                />
              </View>
            </TouchableOpacity>
        )}
        />
    )
  }
}

const styles = StyleSheet.create({})
