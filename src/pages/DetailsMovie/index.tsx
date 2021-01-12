import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {IMAGE_ASSETS} from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Gap} from '../../components';
import {colors, dateFormat, fonts} from '../../utils';
import {
  IconBackArrow,
  IconEmptyHeart,
  IconFillHeart,
  IconStar,
} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearDetailsMovie,
  deleteFavoriteMovie,
  requestDetailsMovie,
  updateFavoriteMovie,
} from '../../redux/actions';
import {detailsMovieData} from '../../config/themoviedb';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import YoutubePlayer from 'react-native-youtube-iframe';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const DetailsMovie = ({navigation, route}: any) => {
  const {movieData} = route.params;
  const dispatch = useDispatch();
  const stateGlobal: any = useSelector((state) => state);
  const [menuBackdrop, setMenuBackdrop] = useState(true);
  const [isLove, setIsLove] = useState({});

  const initData = async () => {
    await dispatch(requestDetailsMovie(detailsMovieData(movieData.id)));
    // await storeData('favMovie', [{id: 1111}, {id: 2222}, {id: 3333}]);  //jus for fill storage
    // getData('favMovie').then((res) => {
    //   // console.log(res);
    //   const findIsLove = res.find((x: any) => x.id === movieData.id);
    //   setIsLove(findIsLove ? true : false);
    // });
  };

  const findIsLove = () => {
    const res = stateGlobal.favMovie.favMovie.find(
      (x: any) => x.id === movieData.id,
    );
    setIsLove(res ? true : false);
  };

  useEffect(() => {
    initData();
    return () => {
      dispatch(clearDetailsMovie());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    findIsLove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateGlobal]);

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.backdropWrapper}>
        <ImageBackground
          style={styles.backdropImage}
          source={{uri: IMAGE_ASSETS + movieData.backdrop_path}}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        onScroll={(e: any) => {
          e.nativeEvent.contentOffset.y <= 40
            ? setMenuBackdrop(true)
            : setMenuBackdrop(false);
        }}>
        <Gap height={wp('100%') / 2 - 20} />
        <View style={styles.page}>
          <View style={styles.head}>
            <View style={styles.posterWrapper}>
              <Image
                style={styles.posterImage}
                source={{uri: IMAGE_ASSETS + movieData.poster_path}}
              />
            </View>
            <View style={styles.titleWrapper}>
              <View style={styles.starWrapper}>
                <IconStar height={10} width={10} />
                <Text style={styles.starText}>{movieData.vote_average}</Text>
              </View>
              <Text style={styles.title}>{movieData.title}</Text>
              <Text style={styles.release}>
                Release: {''}
                {movieData.release_date &&
                  dateFormat(new Date(movieData.release_date), false, 2)}
              </Text>
            </View>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Status</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.status || <ShimmerPlaceHolder />}
          </Text>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Original Title</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.original_title || (
              <ShimmerPlaceHolder />
            )}
          </Text>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Genre</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.genres ? (
              stateGlobal.movie.movieDetails.genres.map((genre: any) => {
                return `${genre.name}, `;
              })
            ) : (
              <Text style={styles.value}>
                <ShimmerPlaceHolder />
              </Text>
            )}
          </Text>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Overview</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.overview || <ShimmerPlaceHolder />}
          </Text>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Production Companies</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.production_companies ? (
              stateGlobal.movie.movieDetails.production_companies.map(
                (genre: any) => {
                  return `${genre.name}, `;
                },
              )
            ) : (
              <Text style={styles.value}>
                <ShimmerPlaceHolder />
              </Text>
            )}
          </Text>
          <View style={styles.labelWrapper}>
            <Text style={styles.slashLabel}> | </Text>
            <Text style={styles.label}>Production Countries</Text>
          </View>
          <Text style={styles.value}>
            {stateGlobal.movie.movieDetails.production_countries ? (
              stateGlobal.movie.movieDetails.production_countries.map(
                (genre: any) => {
                  return `${genre.name}, `;
                },
              )
            ) : (
              <Text style={styles.value}>
                <ShimmerPlaceHolder />
              </Text>
            )}
          </Text>
          <View style={{padding: 5}}>
            {stateGlobal.movie.movieDetails.videos &&
              stateGlobal.movie.movieDetails.videos.results
                .filter((item: any) => item.site === 'YouTube')
                .map((video: any, index: number) => {
                  return (
                    <Fragment key={index}>
                      <YoutubePlayer
                        height={200}
                        videoId={video.key}
                        initialPlayerParams={{
                          preventFullScreen: true,
                          controls: false,
                        }}
                      />
                      <Gap height={20} />
                    </Fragment>
                  );
                })}
          </View>
          <Gap
            height={
              stateGlobal.movie.movieDetails.original_title ? 50 : hp('100%')
            }
          />
        </View>
      </ScrollView>
      {menuBackdrop && (
        <View style={styles.wrappeBackdropMenu}>
          <TouchableOpacity
            style={styles.wrapperBackButton}
            onPress={() => navigation.goBack()}>
            <IconBackArrow height={35} width={35} />
          </TouchableOpacity>
          {isLove === false && (
            <TouchableOpacity
              style={styles.wrapperLoveButton}
              onPress={async () =>
                await dispatch(updateFavoriteMovie(movieData))
              }>
              <IconEmptyHeart height={35} width={35} />
            </TouchableOpacity>
          )}
          {isLove === true && (
            <TouchableOpacity
              style={styles.wrapperLoveButton}
              onPress={async () =>
                await dispatch(deleteFavoriteMovie(movieData))
              }>
              <IconFillHeart height={35} width={35} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default DetailsMovie;

const styles = StyleSheet.create({
  pageWrapper: {
    display: 'flex',
    flex: 1,
  },
  backdropWrapper: {
    width: wp('100%'),
    height: wp('100%') / 2,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flex: 1,
  },
  backdropImage: {
    aspectRatio: 2 / 1,
  },
  wrappeBackdropMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
    position: 'absolute',
    width: '100%',
  },
  wrapperBackButton: {
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.background.dark,
  },
  wrapperLoveButton: {
    marginRight: 20,
  },
  scroll: {
    borderRadius: 20,
  },
  page: {
    backgroundColor: colors.background.light,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
  },
  posterWrapper: {
    width: hp('100%') / 6 - 20,
    height: hp('100%') / 4 - 20,
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: -wp('100%') / 6,
    marginRight: 10,
  },
  posterImage: {
    aspectRatio: 2 / 3,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: colors.label.primary,
    fontFamily: fonts.primary[700],
    fontSize: 18,
  },
  starWrapper: {
    borderRadius: 5,
    backgroundColor: colors.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: 40,
    height: 20,
    marginTop: 10,
  },
  starText: {
    color: colors.text.star,
    fontFamily: fonts.primary[800],
    fontSize: 10,
    marginLeft: 5,
  },
  release: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 13,
  },
  value: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginLeft: 11,
  },
  labelWrapper: {
    flexDirection: 'row',
  },
  slashLabel: {
    color: colors.text.star,
    fontSize: 14,
  },
  label: {
    color: colors.label.primary,
    fontFamily: fonts.primary[700],
    fontSize: 14,
  },
});
