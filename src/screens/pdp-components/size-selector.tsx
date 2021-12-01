import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {VariationAttributeValue} from '../../types/products';
import {sizeSelectorStyles, sectionTitleStyles} from './styles';

type SizeSelectorProps = {
  sizes: VariationAttributeValue[];
};

const SizeSelector = ({sizes}: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const onItemPress = (itemId: string) => setSelectedSize(itemId);
  return (
    <View>
      <Text style={sectionTitleStyles.title}>{'Please select a size'}</Text>
      <View style={sizeSelectorStyles.container}>
        {sizes.map(size => {
          return (
            <TouchableOpacity
              key={size.id}
              style={[
                sizeSelectorStyles.sizeItem,
                selectedSize === size.id &&
                  sizeSelectorStyles.selectedItemContainer,
              ]}
              onPress={() => onItemPress(size.id)}>
              <Text
                style={[
                  selectedSize === size.id && sizeSelectorStyles.selectedItem,
                ]}>
                {size.displayValue}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SizeSelector;
