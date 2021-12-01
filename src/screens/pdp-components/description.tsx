import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';
import {sectionTitleStyles} from './styles';

type DescriptionProps = {
  description: string;
};

const Description = ({description}: DescriptionProps) => {
  return (
    <View>
      <Text style={sectionTitleStyles.title}>{'Details'}</Text>
      <HTML
        source={{html: description}}
        contentWidth={Dimensions.get('screen').width}
      />
    </View>
  );
};

export default Description;
