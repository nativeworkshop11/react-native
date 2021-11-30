import React from 'react';
import renderer from 'react-test-renderer';
import PlpScreen from '../src/screens/plp-screen';

jest.mock('node-fetch');

jest.mock('@react-navigation/core', () => ({
  useNavigation: jest.fn(),
  useRoute: () => ({params: {keyword: 'bag'}}),
}));

describe('PLP', () => {
  it('should render', () => {
    const wrapper = renderer.create(<PlpScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
