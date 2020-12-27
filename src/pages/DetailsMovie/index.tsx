import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IMAGE_ASSETS} from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap} from '../../components';
import {colors, dateFormat, fonts} from '../../utils';
import {IconStar} from '../../assets';

const DetailsMovie = ({route}: any) => {
  const {movieData} = route.params;

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.backdropWrapper}>
        <Image
          style={styles.backdropImage}
          source={{uri: IMAGE_ASSETS + movieData.backdrop_path}}
          resizeMode="cover"
        />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={wp('100%') / 2 - 20} />
        <View style={styles.page}>
          <View style={styles.head}>
            <View style={styles.posterWrapper}>
              <Image
                style={styles.posterImage}
                source={{uri: IMAGE_ASSETS + movieData.poster_path}}
              />
            </View>
            <View style={styles.titleWrapper}>
              <View style={styles.starWrapper}>
                <IconStar height={10} width={10} />
                <Text style={styles.starText}>{movieData.vote_average}</Text>
              </View>
              <Text style={styles.title} numberOfLines={1}>
                {movieData.title}
              </Text>
              <Text style={styles.release}>
                Release: {''}
                {movieData.release_date &&
                  dateFormat(new Date(movieData.release_date), false, 2)}
              </Text>
            </View>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Status</Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Original Title</Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Genre</Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Overview</Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Production Companies</Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Production Countries</Text>
          </View>
          <Text style={styles.overview}>{movieData.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsMovie;

const styles = StyleSheet.create({
  pageWrapper: {
    display: 'flex',
    flex: 1,
  },
  backdropWrapper: {
    width: wp('100%'),
    height: wp('100%') / 2,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flex: 1,
  },
  backdropImage: {
    aspectRatio: 2 / 1,
  },
  scroll: {
    borderRadius: 20,
    display: 'flex',
    flex: 1,
  },
  page: {
    backgroundColor: colors.background.light,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: hp('100%'),
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
  },
  posterWrapper: {
    width: hp('100%') / 6 - 20,
    height: hp('100%') / 4 - 20,
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: -wp('100%') / 6,
    marginRight: 10,
  },
  posterImage: {
    aspectRatio: 2 / 3,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: colors.label.primary,
    fontFamily: fonts.primary[700],
    fontSize: 18,
  },
  starWrapper: {
    borderRadius: 5,
    backgroundColor: colors.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: 40,
    height: 20,
    marginTop: 10,
  },
  starText: {
    color: colors.text.star,
    fontFamily: fonts.primary[800],
    fontSize: 10,
    marginLeft: 5,
  },
  release: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 13,
  },
  overview: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginLeft: 11,
  },
  labelWrapper: {
    flexDirection: 'row',
  },
  slashLabel: {
    color: colors.text.star,
    fontSize: 14,
  },
  label: {
    color: colors.label.primary,
    fontFamily: fonts.primary[700],
    fontSize: 14,
  },
});
