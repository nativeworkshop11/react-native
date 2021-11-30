import * as React from 'react';
// import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeStackParamsList,
  HomeStackScreenNames,
} from './src/types/navigation';
import HomeScreen from './src/screens/home-screen';
import PlpScreen from './src/screens/plp-screen';
import PdpScreen from './src/screens/pdp-screen';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HomeStackScreenNames.HOME}
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={HomeStackScreenNames.PLP}
          component={PlpScreen}
          options={{title: 'PLP'}}
        />
        <Stack.Screen
          name={HomeStackScreenNames.PDP}
          component={PdpScreen}
          options={{title: 'PDP'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
