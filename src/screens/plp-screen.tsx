import {useRoute, useNavigation, RouteProp} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {HomeStackParamsList, HomeStackScreenNames} from '../types/navigation';

import {styles} from './plp-styles';

type RouteProps = RouteProp<HomeStackParamsList, HomeStackScreenNames.PLP>;

type Product = {
  productId: string;
  productName: string;
  image: {
    alt: string;
    url: string;
    title: string;
  };
  prices: {
    list: {
      value: number;
      formatted: string;
    };
  };
};

const PlpScreen = () => {
  const navigator = useNavigation();
  const {keyword} = useRoute<RouteProps>().params || {};
  const [products, setProducts] = useState<Product[]>([]);

  const navigateToPdp = (pid?: string) =>
    navigator.push(HomeStackScreenNames.PDP, {pid});

  const renderItem = ({item}: ListRenderItemInfo<Product>) => (
    <TouchableOpacity onPress={() => navigateToPdp(item?.productId)}>
      <Image source={{uri: item?.image?.url}} style={styles.image} />
      <Text style={styles.text}>{item?.productName}</Text>
      <Text style={styles.price}>{item?.prices?.list?.formatted}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetch(`https://nodejs-flutter.herokuapp.com/api/products?query=${keyword}`)
      .then(res => res.json())
      .then(res => setProducts(res?.products));
  });

  if (!products.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.search}>{`No results found for: ${keyword}`}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.search}>
        {`Search results for: ${keyword} (${products.length})`}
      </Text>
      <FlatList
        columnWrapperStyle={styles.item}
        data={products}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item: Product) => item?.productId}
        ItemSeparatorComponent={() => <Text style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PlpScreen;
