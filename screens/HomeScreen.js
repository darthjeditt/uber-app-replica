import React, { Component } from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';


export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <Text style={[tw`text-red-500 p-10`, {color: 'purple'}]}>I am Homescreen!</Text>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
