import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Suggestions from '../pages/Suggestions';
import MoscowMule from '../pages/MoscowMule';
import Community from '../pages/Community';
import SharedXp from '../pages/SharedXp';
import Forum from '../pages/Forum';

const Akol = createStackNavigator();

const Routes: React.FC = () => (
  <Akol.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Akol.Screen name="Home" component={Home} />
    <Akol.Screen name="SignIn" component={SignIn} />
    <Akol.Screen name="Dashboard" component={Dashboard} />
    <Akol.Screen name="Profile" component={Profile} />
    <Akol.Screen name="Suggestions" component={Suggestions} />
    <Akol.Screen name="MoscowMule" component={MoscowMule} />
    <Akol.Screen name="Community" component={Community} />
    <Akol.Screen name="SharedXp" component={SharedXp} />
    <Akol.Screen name="Forum" component={Forum} />
  </Akol.Navigator>
);

export default Routes;
