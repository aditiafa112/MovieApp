import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import {Card, Carrousel, Gap, TopBar} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Api from '../../config/api/themoviedb';
import {colors, fonts} from '../../utils';

const Home = () => {
  const [state, setstate] = useState({
    movie: {
      page: Number,
      results: [],
      total_results: Number,
      total_pages: Number,
      dates: {
        maximum: String,
        minimum: String,
      },
    },
  });

  const getApi = async () => {
    const getUpcomingMovie = await Api.getUpcomingMovie();
    setstate({...state, movie: getUpcomingMovie});
    console.log(getUpcomingMovie.results);
  };

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItemComingSoon = ({item}: any) => <Card item={item} />;
  const renderItemTrending = ({item}: any) => (
    <Card item={item} horizontal={true} />
  );

  const ItemSeparatorComponent = () => {
    return <Gap width={20} />;
  };

  const ListFooterComponent = () => {
    return <Gap width={40} />;
  };

  return (
    <ScrollView
      style={styles.scrollWrapper}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <TopBar />
        <View style={styles.body}>
          <Text style={styles.sectionName}>Now Playing</Text>

          <Gap height={8} />
          <Carrousel data={state.movie.results} />
          <Gap height={8} />

          <Text style={styles.sectionName}>Coming Soon</Text>

          <Gap height={8} />
          <FlatList
            data={state.movie.results.slice(0, 8)}
            renderItem={renderItemComingSoon}
            keyExtractor={(item: any) => item.id.toString()}
            horizontal={true}
            style={styles.cardWrapper}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListFooterComponent={ListFooterComponent}
          />
          <Gap height={8} />

          <Text style={styles.sectionName}>Trending</Text>

          <Gap height={8} />
          <FlatList
            data={state.movie.results.slice(0, 8)}
            renderItem={renderItemTrending}
            keyExtractor={(item: any) => item.id.toString()}
            horizontal={true}
            style={styles.cardWrapper}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListFooterComponent={ListFooterComponent}
          />
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
    // height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 60,
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
    paddingHorizontal: 20,
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
