import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../../../utils';
import CrslRenderitem from './RenderItem';

interface CarrouselProps {
  data: any[];
}

const Carrousel: React.FC<CarrouselProps> = ({data}) => {
  const windowWidth = Math.round(Dimensions.get('window').width);

  const [state, setstate] = useState({
    activeIndex: 1,
  });

  return (
    <View>
      <Carousel
        layout={'default'}
        // ref={carouselRef}
        data={data.slice(0, 10)}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 30}
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
        // carouselRef={this._slider1Ref}
        // tappableDots={!!this._slider1Ref}
      />
    </View>
  );
};
export default Carrousel;

const styles = StyleSheet.create({
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