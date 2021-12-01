import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {HomeStackScreenNames} from '../../types/navigation';
import {ProductHit} from '../../types/products';

import {styles} from './styles';

const ProductList = ({products}: {products: ProductHit[]}) => {
  const navigator = useNavigation();

  const navigateToPdp = (pid?: string) =>
    navigator.push(HomeStackScreenNames.PDP, {pid});

  const renderItem = ({item}: ListRenderItemInfo<ProductHit>) => (
    <TouchableOpacity onPress={() => navigateToPdp(item?.productId)}>
      <Image source={{uri: item?.image?.url}} style={styles.image} />
      <Text style={styles.text}>{item?.productName}</Text>
      <Text style={styles.price}>{item?.prices?.list?.formatted}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      columnWrapperStyle={styles.item}
      data={products}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item: ProductHit) => item?.productId}
      ItemSeparatorComponent={() => <Text style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
