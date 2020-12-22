import React, {FC} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {colors, dateFormat, fonts} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder, {
  createShimmerPlaceholder,
} from 'react-native-shimmer-placeholder';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const windowWidth = Dimensions.get('window').width;

type CardProps = {
  item: any;
};

const HorizontalCard: FC<CardProps> = ({item}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <ShimmerPlaceHolder
          height={wp('100%') / 3.5}
          width={wp('50%') + 10}
          visible={true}
          isReversed={false}
          shimmerStyle={[true && {borderRadius: 5}]}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
        </ShimmerPlaceHolder>
      </View>
      <ShimmerPlaceHolder
        height={16}
        width={wp('50%') + 10}
        visible={true}
        isReversed={false}
        shimmerStyle={[true && {borderRadius: 5, marginTop: 12}]}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        height={10}
        width={wp('15%')}
        visible={true}
        isReversed={false}
        shimmerStyle={[true && {borderRadius: 5, marginTop: 4}]}>
        <Text style={styles.dateRelease}>
          {dateFormat(new Date(item.release_date), true)}
        </Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        height={12}
        width={wp('50%') + 10}
        visible={true}
        isReversed={false}
        shimmerStyle={[true && {borderRadius: 5, marginTop: 8}]}>
        <Text style={styles.desc} numberOfLines={2}>
          {item.overview}
        </Text>
      </ShimmerPlaceHolder>
    </View>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: windowWidth / 2 + 10,
  },
  card: {
    width: windowWidth / 2 + 10,
    height: windowWidth / 3.5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: windowWidth / 2 + 10,
    height: windowWidth / 3.5,
    backgroundColor: '#c4c4c4',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 8,
  },
  dateRelease: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.text.secondary,
  },
  desc: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.text.primary,
    marginTop: 4,
  },
});
