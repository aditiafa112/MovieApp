import React, {FC, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors, fonts} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconStar} from '../../../assets';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

type CarrouselProps = {
  data: any[];
  nav: any;
};

const Carrousel: FC<CarrouselProps> = ({data, nav}) => {
  const windowWidth = Math.round(Dimensions.get('window').width);

  const [state, setstate] = useState({
    activeIndex: 0,
  });

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.crslRenderitem}
        // onPress={() => navigate('DetailsMovie', {movieData: item})}
        onPress={() => nav.navigate('DetailsMovie', {movieData: item})}>
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
      </TouchableOpacity>
    );
  };

  return (
    <ShimmerPlaceHolder
      height={wp('50%')}
      width={wp('100%') - 35}
      visible={data[0].id ? true : false}
      isReversed={false}
      shimmerStyle={[true && styles.containerShimmer]}>
      <View>
        <Carousel
          layout={'default'}
          data={data.slice(0, 10)}
          sliderWidth={windowWidth}
          itemWidth={windowWidth - 35}
          loop={true}
          autoplay={true}
          autoplayInterval={5000}
          hasParallaxImages={true}
          renderItem={renderItem}
          onSnapToItem={(index) => setstate({...state, activeIndex: index})}
        />
        <Pagination
          dotsLength={data.slice(0, 10).length}
          activeDotIndex={state.activeIndex}
          containerStyle={styles.paginationContainer}
          dotColor={colors.carrousel.dot.on}
          dotStyle={styles.dotOn}
          inactiveDotStyle={styles.dotOff}
          inactiveDotColor={colors.carrousel.dot.off}
          inactiveDotOpacity={0.2}
          inactiveDotScale={0.8}
        />
      </View>
    </ShimmerPlaceHolder>
  );
};
export default Carrousel;

const styles = StyleSheet.create({
  containerShimmer: {
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  paginationContainer: {
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  dotOff: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotOn: {
    width: 16,
    height: 8,
    borderRadius: 4,
  },
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
