import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFavoriteMovie} from '../../redux/actions';
import {colors} from '../../utils';
import Logo from './Logo';
import Title from './Title';

const Splash = ({navigation}: any) => {
  const dispatch = useDispatch();

  const initData = async () => {
    await dispatch(setFavoriteMovie());
  };

  useEffect(() => {
    initData();
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.page}>
      <Logo />
      <Title />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
