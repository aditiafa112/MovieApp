import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../utils';

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.appName}>The Movie</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: colors.background.dark,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  appName: {
    fontSize: hp('3.2%'),
    color: colors.logo.secondary,
    fontFamily: fonts.logo,
  },
});
