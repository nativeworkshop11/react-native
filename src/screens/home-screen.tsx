import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {HomeStackScreenNames} from '../types/navigation';
import {homeStyles} from './home-styles';
import {Input} from 'react-native-elements';

const HomeScreen = () => {
  const navigator = useNavigation();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const onSearch = (keyword?: string) => {
    if (!keyword || !keyword.length) {
      setError('Write keyword');
      return;
    }

    navigator.push(HomeStackScreenNames.PLP, {keyword});
  };

  return (
    <View style={homeStyles.container}>
      <View>
        <Input
          autoCompleteType
          placeholder={'search for products'}
          onChangeText={text => setSearch(text)}
          errorMessage={error}
          containerStyle={{width: 300}}
        />
      </View>
      <Button title={'Search'.toUpperCase()} onPress={() => onSearch(search)} />
    </View>
  );
};

export default HomeScreen;
