import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TopBar} from '../../components';
import {colors} from '../../utils';

const About = () => {
  return (
    <View style={styles.page}>
      <TopBar />
      <View style={styles.body}>
        <View style={styles.container}>
          <Text>About Page</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  body: {
    backgroundColor: colors.background.light,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    paddingHorizontal: 20,
  },
});
