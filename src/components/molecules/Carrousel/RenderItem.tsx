import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RenderItem = ({item}: any) => {
  return (
    <View style={styles.crslRenderitem} key={item.id}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        }}
        style={styles.crslImage}
      />
      <View style={styles.starWrapper}>
        <IconStar height={10} width={10} />
        <Text style={styles.starText}>{item.vote_average}</Text>
      </View>
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
    width: wp('100%') - 35,
    height: wp('50%'),
  },
  crslImage: {
    width: '100%',
    height: wp('50%'),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  starWrapper: {
    position: 'absolute',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: colors.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 40,
    padding: 5,
    top: 10,
  },
  starText: {
    color: colors.text.star,
    fontFamily: fonts.primary.regular,
    fontSize: 10,
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
