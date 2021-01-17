import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {TopBar} from '../../components';
import {colors, fonts} from '../../utils';
import {IMAGE_ASSETS} from '../../config';
import {IconStar} from '../../assets';

const Favorite = ({navigation}: any) => {
  const stateGlobal: any = useSelector((state) => state);

  const formatData = (data: any, numColumns: any) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderItemCard = ({item}: any) => {
    if (item.empty === true) {
      return <View style={[styles.listItemCard, styles.itemInvisible]} />;
    }

    return (
      <View style={styles.listItemCard}>
        <Image
          source={{uri: IMAGE_ASSETS + item.poster_path}}
          style={styles.imageItem}
          resizeMode={'cover'}
        />
        <View style={styles.starWrapper}>
          <IconStar height={10} width={10} />
          <Text style={styles.starText}>{item.vote_average}</Text>
        </View>
        <Text style={{color: '#000'}}>{item.title}</Text>
      </View>
    );
  };

  const renderItemList = ({item, index}: any) => {
    if (!item.title) {
      return <View />;
    }
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('DetailsMovie', {movieData: item})}>
        <Text style={styles.listItemSequence}>{index + 1}</Text>
        <Text style={styles.listItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const searchInput = () => {
    return (
      <View>
        <Text style={styles.title}>Favorite Movie</Text>
        <View style={styles.titleSeparatorWrapper}>
          <View style={styles.titleSeparator} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <TopBar />
      <View style={styles.body}>
        <View style={styles.container}>
          <FlatList
            // style={{width: '100%'}}
            ListHeaderComponent={searchInput}
            data={formatData(stateGlobal.favMovie.favMovie, 2)}
            renderItem={renderItemList}
            keyExtractor={(item: any, index: any) => index.toString()}
            // numColumns={1}
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
  listItemCard: {
    flex: 1,
    margin: 5,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  imageItem: {
    width: '100%',
    height: Dimensions.get('window').width / 2 + 30,
    backgroundColor: '#c4c4c4',
    borderRadius: 5,
  },
  starWrapper: {
    position: 'absolute',
    borderTopLeftRadius: 5,
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
    fontSize: Dimensions.get('window').width <= 599 ? 10 : 14,
    marginLeft: 5,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  listItemSequence: {
    width: '15%',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: fonts.primary[500],
    backgroundColor: colors.background.dark,
    borderRadius: 5,
    color: '#fff',
  },
  listItemTitle: {
    width: '85%',
    paddingHorizontal: 10,
    fontFamily: fonts.primary[600],
    color: colors.label.primary,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.primary,
    textAlign: 'center',
  },
  titleSeparator: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  titleSeparatorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
