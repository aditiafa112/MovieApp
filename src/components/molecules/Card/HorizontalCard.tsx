import React, {FC} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {colors, dateFormat, fonts} from '../../../utils';

const windowWidth = Dimensions.get('window').width;

type CardProps = {
  item: any;
};

const HorizontalCard: FC<CardProps> = ({item}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.dateRelease}>
        {dateFormat(new Date(item.release_date), true)}
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {item.overview}
      </Text>
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
