import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Home, Splash, About, TvSeries} from '../pages';
import {BottomNavigator} from '../components';
import {colors} from '../utils';

const Stack = createStackNavigator();
const Tap = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tap.Navigator tabBar={(props: any) => <BottomNavigator {...props} />}>
      <Tap.Screen name="Movie" component={Home} />
      <Tap.Screen name="TV" component={TvSeries} />
      <Tap.Screen name="About" component={About} />
    </Tap.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background.dark}
        hidden={false}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
