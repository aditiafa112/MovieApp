import React, {FC, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../../../utils';
import CrslRenderitem from './RenderItem';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

type CarrouselProps = {
  data: any[];
};

const Carrousel: FC<CarrouselProps> = ({data}) => {
  const windowWidth = Math.round(Dimensions.get('window').width);

  const [state, setstate] = useState({
    activeIndex: 0,
  });

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
          renderItem={CrslRenderitem}
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
});
