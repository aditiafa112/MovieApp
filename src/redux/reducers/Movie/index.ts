import {
  CLEAR_MOVIE_COMING_SOON_LIST,
  SET_MOVIE_COMING_SOON_LIST,
  CLEAR_MOVIE_NOW_PLAYING_LIST,
  SET_MOVIE_NOW_PLAYING_LIST,
  CLEAR_MOVIE_TRENDING_LIST,
  SET_MOVIE_TRENDING_LIST,
} from '../../constants';

const initialState = {
  movieComingSoon: [{}, {}, {}],
  movieNowPlaying: [{}, {}, {}],
  movieTrending: [{}, {}, {}],
};

const Movie = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_MOVIE_COMING_SOON_LIST:
      return {
        ...state,
        movieComingSoon: [],
      };
    case SET_MOVIE_COMING_SOON_LIST:
      return {
        ...state,
        movieComingSoon: action.value,
      };
    case CLEAR_MOVIE_NOW_PLAYING_LIST:
      return {
        ...state,
        movieNowPlaying: [],
      };
    case SET_MOVIE_NOW_PLAYING_LIST:
      return {
        ...state,
        movieNowPlaying: action.value,
      };
    case CLEAR_MOVIE_TRENDING_LIST:
      return {
        ...state,
        movieTrending: [],
      };
    case SET_MOVIE_TRENDING_LIST:
      return {
        ...state,
        movieTrending: action.value,
      };
    default:
      return state;
  }
};

export default Movie;
