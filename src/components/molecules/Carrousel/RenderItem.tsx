import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../utils';
// import {ParallaxImage} from 'react-native-snap-carousel';

const RenderItem = ({item}: any, parallaxProps: any) => {
  return (
    <View style={styles.crslRenderitem} key={item.id}>
      {/* <ParallaxImage
        source={{uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      /> */}
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        }}
        style={styles.crslImage}
      />
      {/* <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(249,211,66,0.5)']}
          style={styles.crslTitleWrap}>
          <Text numberOfLines={1} style={styles.crslTitle}>
            {item.title}
          </Text>
        </LinearGradient> */}
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
    width: wp('100%') - 60,
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
