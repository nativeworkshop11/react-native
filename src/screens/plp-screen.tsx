import {useRoute, RouteProp} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import {HomeStackParamsList, HomeStackScreenNames} from '../types/navigation';
type RouteProps = RouteProp<HomeStackParamsList, HomeStackScreenNames.PLP>;

const PlpScreen = () => {
  const {keyword} = useRoute<RouteProps>().params || {};
  return (
    <View>
      <Text>{`${keyword}`}</Text>
    </View>
  );
};

export default PlpScreen;
