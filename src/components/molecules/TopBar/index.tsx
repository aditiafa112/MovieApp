import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {fonts} from '../../../utils';

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.appName}>Movie App</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#f9d342',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  appName: {
    fontSize: hp('3.2%'),
    color: '#fff',
    fontFamily: fonts.logo,
  },
});
