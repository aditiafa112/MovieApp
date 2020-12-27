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

const HorizontalCard: FC<CardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
      <View style={styles.card}>
        <ShimmerPlaceHolder
          height={wp('100%') / 3.5}
          width={wp('50%') + 10}
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
            <IconStar height={10} width={10} />
            <Text style={styles.starText}>{item.vote_average}</Text>
          </View>
        </ShimmerPlaceHolder>
      </View>
      <ShimmerPlaceHolder
        height={16}
        width={wp('50%') + 10}
        visible={item.title ? true : false}
        isReversed={false}
        shimmerStyle={[true && styles.titleShimmer]}>
        <Text style={styles.title} numberOfLines={1}>
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
    </TouchableOpacity>
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
  imageShimmer: {
    borderRadius: 5,
  },
  starWrapper: {
    position: 'absolute',
    borderBottomRightRadius: 10,
    backgroundColor: colors.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  starText: {
    color: colors.text.star,
    fontFamily: fonts.primary.regular,
    fontSize: 10,
    marginLeft: 5,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 8,
  },
  titleShimmer: {
    borderRadius: 5,
    marginTop: 12,
  },
  dateRelease: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.text.secondary,
  },
  dateReleaseShimmer: {
    borderRadius: 5,
    marginTop: 4,
  },
});
