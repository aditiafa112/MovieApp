import React, {useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {ILLOGO} from '../../assets';

const Logo = () => {
  let opacity = new Animated.Value(0);

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 200],
  });

  const animatedStyles = [
    styles.container,
    {
      opacity,
      width: 200,
      height: size,
    },
  ];

  useEffect(() => {
    Animated.timing(opacity, {
      useNativeDriver: false,
      isInteraction: false,
      toValue: 1,
      duration: 1500,
      easing: Easing.in(Easing.bounce),
      delay: 1000,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <ILLOGO width={200} height={200} />
    </Animated.View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
