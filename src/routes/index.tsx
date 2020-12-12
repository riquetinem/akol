import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Suggestions from '../pages/Suggestions';
import MoscowMule from '../pages/MoscowMule';

const Akol = createStackNavigator();

const Routes: React.FC = () => (
  <Akol.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Akol.Screen name="Home" component={Home} />
    <Akol.Screen name="SignUp" component={SignUp} />
    <Akol.Screen name="Dashboard" component={Dashboard} />
    <Akol.Screen name="Suggestions" component={Suggestions} />
    <Akol.Screen name="MoscowMule" component={MoscowMule} />
  </Akol.Navigator>
);

export default Routes;
