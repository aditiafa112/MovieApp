import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import HorizontalCard from './HorizontalCard';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import BigCard from './BigSize';
import {IconStar} from '../../../assets';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
const windowWidth = Dimensions.get('window').width;

type CardProps = {
  item: any;
  horizontal?: boolean;
  bigSize?: boolean;
  onPress?: any;
};

const Card: FC<CardProps> = ({
  item,
  horizontal = false,
  bigSize = false,
  onPress,
}) => {
  if (horizontal) {
    return <HorizontalCard item={item} onPress={onPress} />;
  }

  if (bigSize) {
    return <BigCard item={item} onPress={onPress} />;
  }

  return (
    <ShimmerPlaceHolder
      height={wp('50%') + 30}
      width={wp('50%') - 30}
      visible={item.title ? true : false}
      isReversed={false}
      shimmerStyle={[true && styles.cardWrapperShimmer]}>
      <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={styles.starWrapper}>
            <IconStar height={10} width={10} />
            <Text style={styles.starText}>{item.vote_average}</Text>
          </View>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </ShimmerPlaceHolder>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    width: windowWidth / 2 - 30,
  },
  cardWrapperShimmer: {
    borderRadius: 5,
    marginBottom: 24,
  },
  card: {
    width: windowWidth / 2 - 30,
    height: windowWidth / 2 + 30,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: windowWidth / 2 - 30,
    height: windowWidth / 2 + 30,
    backgroundColor: '#c4c4c4',
  },
  starWrapper: {
    position: 'absolute',
    borderBottomRightRadius: 10,
    // padding: 5,
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
    fontSize: wp('100%') <= 599 ? 10 : 14,
    marginLeft: 5,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: wp('100%') <= 599 ? 16 : 20,
    color: colors.text.primary,
    marginTop: 8,
  },
});
