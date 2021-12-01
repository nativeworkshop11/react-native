import React from 'react';
import {View, Text} from 'react-native';
import {ProductPrices} from '../../types/products';
import {headerStyles} from './styles';

type HeaderProps = {
  productName: string;
  productPrice: ProductPrices;
};

const Header = ({productName, productPrice}: HeaderProps) => {
  return (
    <View style={[headerStyles.container]}>
      <View>
        <Text
          style={[
            headerStyles.textContent,
            headerStyles.italic,
          ]}>{`${productName}`}</Text>
      </View>
      <View>
        <Text
          style={
            headerStyles.textContent
          }>{`${productPrice.list.formatted}`}</Text>
      </View>
    </View>
  );
};

export default Header;
