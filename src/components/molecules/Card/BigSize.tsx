import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {IconStar} from '../../../assets';
import {colors, dateFormat, fonts} from '../../../utils';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const windowWidth = Dimensions.get('window').width;

type CardProps = {
  item: any;
  onPress: any;
};

const BigCard: FC<CardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
      <View style={styles.card}>
        <ShimmerPlaceHolder
          height={wp('100%') / 1.5 - 40}
          width={wp('100%')}
          visible={item.backdrop_path ? true : false}
          isReversed={false}
          shimmerStyle={[true && styles.imageShimmer]}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={styles.starWrapper}>
            <IconStar height={13} width={13} />
            <Text style={styles.starText}>{item.vote_average}</Text>
          </View>
        </ShimmerPlaceHolder>
      </View>
      <ShimmerPlaceHolder
        height={16}
        width={wp('50%')}
        visible={item.title ? true : false}
        isReversed={false}
        shimmerStyle={[true && styles.titleShimmer]}>
        <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
          {item.title}
        </Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        height={10}
        width={wp('15%')}
        visible={item.release_date ? true : false}
        isReversed={false}
        shimmerStyle={[true && styles.dateReleaseShimmer]}>
        <Text style={styles.dateRelease}>
          {item.release_date && dateFormat(new Date(item.release_date), true)}
        </Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        height={12}
        width={wp('70%')}
        visible={item.overview ? true : false}
        isReversed={false}
        shimmerStyle={[true && styles.descShimmer]}>
        <Text style={styles.desc} numberOfLines={2}>
          {item.overview}
        </Text>
      </ShimmerPlaceHolder>
    </TouchableOpacity>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: windowWidth - 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  card: {
    width: windowWidth - 40,
    height: windowWidth / 1.5 - 40,
  },
  image: {
    width: windowWidth - 40,
    height: windowWidth / 1.5 - 40,
    backgroundColor: '#c4c4c4',
  },
  imageShimmer: {
    borderRadius: 5,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: wp('100%') <= 599 ? 16 : 20,
    color: colors.text.primary,
    marginTop: 8,
    paddingLeft: 10,
  },
  titleShimmer: {
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 10,
  },
  dateRelease: {
    fontFamily: fonts.primary[500],
    fontSize: wp('100%') <= 599 ? 10 : 14,
    color: colors.text.secondary,
    paddingLeft: 10,
  },
  dateReleaseShimmer: {
    borderRadius: 5,
    marginTop: 4,
    marginLeft: 10,
  },
  desc: {
    fontFamily: fonts.primary[500],
    fontSize: wp('100%') <= 599 ? 12 : 16,
    color: colors.text.primary,
    marginTop: 4,
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  descShimmer: {
    borderRadius: 5,
    marginTop: 8,
    marginLeft: 10,
    marginBottom: 20,
  },
  starWrapper: {
    position: 'absolute',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    // padding: 5,
    backgroundColor: colors.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  starText: {
    color: colors.text.star,
    fontFamily: fonts.primary.regular,
    fontSize: wp('100%') <= 599 ? 13 : 17,
    marginLeft: 5,
  },
});
