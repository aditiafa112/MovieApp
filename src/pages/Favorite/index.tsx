import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TopBar} from '../../components';
import {colors} from '../../utils';
import {IMAGE_ASSETS} from '../../config';

const Favorite = () => {
  const stateGlobal: any = useSelector((state) => state);

  const renderItem = ({item}: any) => (
    <View>
      <Image source={{uri: IMAGE_ASSETS + item.backdrop_path}} />
      <Text style={{color: '#000'}}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.page}>
      <TopBar />
      <View style={styles.body}>
        <View style={styles.container}>
          <FlatList
            data={stateGlobal.favMovie.favMovie}
            renderItem={renderItem}
            keyExtractor={(item: any, index: any) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  body: {
    backgroundColor: colors.background.light,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    paddingHorizontal: 20,
  },
});
