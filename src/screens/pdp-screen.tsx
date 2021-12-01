import {useRoute, RouteProp} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Spinner from '../components/spinner';
import {HomeStackParamsList, HomeStackScreenNames} from '../types/navigation';
import Header from './pdp-components/header';
import {Product, VariationAttributeIds} from '../types/products';
import ImageViewer from './pdp-components/image-viewer';
import SizeSelector from './pdp-components/size-selector';
import BuySection from './pdp-components/buy-section';
import Description from './pdp-components/description';

type RouteProps = RouteProp<HomeStackParamsList, HomeStackScreenNames.PDP>;
const GET_PRODUCT_URL = 'https://nodejs-flutter.herokuapp.com/api/products/';

const PdpScreen = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsloading] = useState(true);
  const {pid} = useRoute<RouteProps>().params;

  useEffect(() => {
    setIsloading(true);
    fetch(`${GET_PRODUCT_URL}${pid}`)
      .then(res => res.json())
      .then(res => setProduct(res))
      .catch(() => {})
      .finally(() => setIsloading(false));
  }, [pid]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!product) {
    return (
      <View>
        <Text>{'No products found for id'}</Text>
      </View>
    );
  }
  const items = [
    <Header productName={product.productName} productPrice={product.prices} />,
    <ImageViewer images={product.images} />,
    <SizeSelector
      sizes={
        product.variationAttributes?.find(
          attribute => attribute.attributeId === VariationAttributeIds.SIZE,
        )?.values || []
      }
    />,
    <BuySection />,
    <Description description={product.longDescription} />,
  ];

  return (
    <ScrollView style={{padding: 15}}>
      {items.map((item, index) => (
        <View key={index} style={{marginBottom: 20}}>
          {item}
        </View>
      ))}
    </ScrollView>
  );
};

export default PdpScreen;
