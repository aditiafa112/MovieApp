import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import {
  IconMovieActive,
  IconMovie,
  IconTV,
  IconTVActive,
  IconUser,
  IconUserActive,
  IconListActive,
  IconList,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}: any) => {
  const Icon = () => {
    if (title === 'Movie') {
      return active ? (
        <IconMovieActive width={23} height={23} />
      ) : (
        <IconMovie width={23} height={23} />
      );
    }
    if (title === 'Favorite') {
      return active ? (
        <IconListActive width={23} height={23} />
      ) : (
        <IconList width={23} height={23} />
      );
    }
    if (title === 'About') {
      return active ? (
        <IconUserActive width={23} height={23} />
      ) : (
        <IconUser width={23} height={23} />
      );
    }
    return <IconMovie width={23} height={23} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={active ? styles.textActive : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  },
  textActive: {
    fontSize: 12,
    color: colors.logo.primary,
    fontFamily: fonts.primary[700],
    marginTop: 4,
  },
});
