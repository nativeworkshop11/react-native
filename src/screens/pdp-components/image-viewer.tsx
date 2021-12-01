import React from 'react';
import {Image, View} from 'react-native';
import {ProductImage} from '../../types/products';
import Carousel from 'react-native-snap-carousel';

type ImageViewerProps = {
  images: ProductImage[];
};

const ImageViewer = ({images}: ImageViewerProps) => {
  const itemBuilder = ({item}: any) => {
    return (
      <View style={{height: 300, width: 300}}>
        <Image style={{height: 300, width: 300}} source={{uri: item.url}} />
      </View>
    );
  };
  return (
    <View>
      <Carousel
        data={images}
        renderItem={itemBuilder}
        sliderWidth={400}
        itemWidth={300}
        layout={'default'}
      />
    </View>
  );
};

export default ImageViewer;
