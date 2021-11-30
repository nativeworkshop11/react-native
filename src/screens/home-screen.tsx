import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {HomeStackScreenNames} from '../types/navigation';

const HomeScreen = () => {
  const navigator = useNavigation();
  const [search, setSearch] = useState('');

  const navigateToPlp = (keyword?: string) => {
    const plpParam = keyword || search;
    navigator.push(HomeStackScreenNames.PLP, {keyword: plpParam});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 20}}>
        <TextInput
          style={{backgroundColor: 'grey'}}
          onChange={e => setSearch(e.nativeEvent.text)}
        />
      </View>
      <Button title="Search products" onPress={() => navigateToPlp()} />

      <Button title="Shop bags" onPress={() => navigateToPlp('bag')} />
    </View>
  );
};

export default HomeScreen;
