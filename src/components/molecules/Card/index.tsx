import React, {FC} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import HorizontalCard from './HorizontalCard';

const windowWidth = Dimensions.get('window').width;

type CardProps = {
  item: any;
  horizontal?: boolean;
};

const Card: FC<CardProps> = ({item, horizontal = false}) => {
  if (horizontal) {
    return <HorizontalCard item={item} />;
  }

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    width: windowWidth / 2 - 30,
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
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 8,
  },
});
