import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Carrousel, Gap, TopBar} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Api from '../../config/api/themoviedb';
import {fonts} from '../../utils';

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
  };

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.page}>
      <TopBar />
      <Gap height={16} />
      <View style={styles.container}>
        <Text style={styles.sectionName}>Cooming Soon</Text>
      </View>
      <Gap height={8} />
      <Carrousel data={state.movie.results} />
      <Gap height={16} />
      <View style={styles.container}>
        <Text style={styles.sectionName}>Movies</Text>
      </View>
      <Gap height={8} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
  },
  sectionName: {
    fontFamily: fonts.primary[500],
    fontSize: hp('2.8%'),
  },
});
