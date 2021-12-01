import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {buyBtnStyles} from './styles';

const BuySection = () => {
  return (
    <View>
      <Button
        title={'Add to bag'}
        titleStyle={buyBtnStyles.title}
        buttonStyle={buyBtnStyles.container}
        onPress={() => {}}
      />
    </View>
  );
};

export default BuySection;
