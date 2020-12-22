import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../utils';

const RenderItem = ({item}: any) => {
  return (
    <View style={styles.crslRenderitem} key={item.id}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        }}
        style={styles.crslImage}
      />
      <View style={styles.crslTitleWrap}>
        <Text style={styles.crslReleaseDate}>{item.release_date}</Text>
        <Text numberOfLines={1} style={styles.crslTitle}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};
export default RenderItem;

const styles = StyleSheet.create({
  crslRenderitem: {
    // marginHorizontal: '5%',
    width: wp('100%') - 35,
    height: wp('50%'),
  },
  crslImage: {
    width: '100%',
    height: wp('50%'),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  crslTitleWrap: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  crslReleaseDate: {
    flexWrap: 'wrap',
    fontSize: hp('1.5%'),
    color: 'rgba(255,255,255, 0.8)',
    fontFamily: fonts.primary[500],
  },
  crslTitle: {
    flexWrap: 'wrap',
    fontSize: hp('3%'),
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: fonts.primary[500],
  },
});
