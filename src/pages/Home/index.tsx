import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import {Card, Carrousel, Gap, TopBar} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors, fonts} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {requestUpcomingMovie} from '../../redux/actions/Movie';
import {upcomingMovieData} from '../../config/themoviedb';

const RenderItemPopular = ({item, onPress}: any) => {
  return (
    <View>
      <Card item={item} bigSize={true} onPress={onPress} />
      <Gap height={10} />
    </View>
  );
};

const ItemSeparatorComponent = () => {
  return <Gap width={20} />;
};

const ListFooterComponent = () => {
  return <Gap width={40} />;
};

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const stateGlobal: any = useSelector((state) => state);

  const getData = async () => {
    await dispatch(requestUpcomingMovie(upcomingMovieData()));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItemComingSoon = ({item}: any) => (
    <Card
      item={item}
      onPress={() => navigation.navigate('DetailsMovie', {movieData: item})}
    />
  );
  const renderItemTrending = ({item}: any) => (
    <Card
      item={item}
      horizontal={true}
      onPress={() => navigation.navigate('DetailsMovie', {movieData: item})}
    />
  );

  return (
    <ScrollView
      style={styles.scrollWrapper}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <TopBar />
        <View style={styles.body}>
          <Text style={styles.sectionName}>Now Playing</Text>
          <Gap height={8} />
          <Carrousel
            data={stateGlobal.movie.movieComingSoon}
            nav={navigation}
          />
          <Gap height={8} />
          <Text style={styles.sectionName}>Upcoming</Text>
          <Gap height={8} />
          <FlatList
            data={stateGlobal.movie.movieComingSoon.slice(0, 8)}
            renderItem={renderItemComingSoon}
            keyExtractor={(item: any, index: number) => index.toString()}
            horizontal={true}
            style={styles.cardWrapper}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListFooterComponent={ListFooterComponent}
          />
          <Gap height={8} />
          <Text style={styles.sectionName}>Top Rated</Text>
          <Gap height={8} />
          <FlatList
            data={stateGlobal.movie.movieComingSoon.slice(0, 8)}
            renderItem={renderItemTrending}
            keyExtractor={(item: any, index: number) => index.toString()}
            horizontal={true}
            style={styles.cardWrapper}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListFooterComponent={ListFooterComponent}
          />
          <Gap height={8} />
          <Text style={styles.sectionName}>Popular</Text>
          <Gap height={8} />
          <View style={styles.cardWrapper}>
            {stateGlobal.movie.movieComingSoon
              .slice(0, 10)
              .map((item: any, index: any) => {
                return (
                  <RenderItemPopular
                    key={index}
                    item={item}
                    onPress={() =>
                      navigation.navigate('DetailsMovie', {movieData: item})
                    }
                  />
                );
              })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

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
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sectionName: {
    fontFamily: fonts.primary[800],
    fontSize: hp('2.8%'),
    color: colors.label.primary,
    marginHorizontal: 20,
  },
  cardWrapper: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  scrollWrapper: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
});
