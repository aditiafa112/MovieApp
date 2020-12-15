import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={active ? styles.textActive : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 10,
    color: '#000',
    fontFamily: fonts.primary[600],
    marginTop: 4,
  },
  textActive: {
    fontSize: 10,
    color: 'blue',
    fontFamily: fonts.primary[600],
    marginTop: 4,
  },
});
