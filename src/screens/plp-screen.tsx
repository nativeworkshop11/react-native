import {useRoute, RouteProp} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Spinner from '../components/spinner';
import ProductList from './plp-components/product-list';
import {HomeStackParamsList, HomeStackScreenNames} from '../types/navigation';
import {ProductHit} from '../types/products';

type RouteProps = RouteProp<HomeStackParamsList, HomeStackScreenNames.PLP>;
const GET_PRODUCTS_URL =
  'https://nodejs-flutter.herokuapp.com/api/products?query=';

const PlpScreen = () => {
  const {keyword} = useRoute<RouteProps>().params || {};
  const [products, setProducts] = useState<ProductHit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_PRODUCTS_URL}${keyword}`)
      .then(res => res.json())
      .then(res => setProducts(res?.products))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [keyword]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!products.length) {
    return (
      <View style={{flex: 1}}>
        <Text style={{padding: 20}}>{`No results found for: ${keyword}`}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{padding: 20}}>
        {`Search results for: ${keyword} (${products.length})`}
      </Text>
      <ProductList products={products} />
    </View>
  );
};

export default PlpScreen;
