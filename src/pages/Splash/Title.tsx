import React, {useEffect} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {fonts} from '../../utils';

const Title = () => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 500,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim, // Bind opacity to animated value
        },
      ]}>
      <Text style={styles.appName}>Movie App</Text>
    </Animated.View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 26,
    fontFamily: fonts.primary.regular,
  },
});
