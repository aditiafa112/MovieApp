import {requestGet} from '../../../config/api';
import {API_URL, DETAILS_MOVIE, UPCOMING_MOVIE} from '../../../config';
import {
  CLEAR_MOVIE_COMING_SOON_LIST,
  SET_MOVIE_COMING_SOON_LIST,
  // CLEAR_MOVIE_NOW_PLAYING_LIST,
  // SET_MOVIE_NOW_PLAYING_LIST,
  // CLEAR_MOVIE_TRENDING_LIST,
  // SET_MOVIE_TRENDING_LIST,
  CLEAR_MOVIE_DETAILS_LIST,
  SET_MOVIE_DETAILS_LIST,
} from '../../constants';
import {showError} from '../../../utils';

export const clearUpcomingMovie = () => ({
  type: CLEAR_MOVIE_COMING_SOON_LIST,
});

export const requestUpcomingMovie = (data?: any, token?: any) => {
  return async (dispatch: any) => {
    try {
      let res: any = await requestGet(
        data,
        `${API_URL}${UPCOMING_MOVIE}`,
        token,
      );
      if (!res.status_message) {
        dispatch({type: SET_MOVIE_COMING_SOON_LIST, value: res.results});
      } else {
        showError('Error when request upcoming movie ' + res.status_message);
      }
    } catch (error) {
      showError('Network request upcoming movie failed.');
    }
  };
};

export const clearDetailsMovie = () => ({
  type: CLEAR_MOVIE_DETAILS_LIST,
});

export const requestDetailsMovie = (data?: any, token?: any) => {
  let movieId = data.movie_id;

  return async (dispatch: any) => {
    try {
      let res: any = await requestGet(
        data,
        `${API_URL}${DETAILS_MOVIE}${movieId}`,
        token,
      );
      if (!res.status_message) {
        dispatch({type: SET_MOVIE_DETAILS_LIST, value: res});
      } else {
        showError('Error when request upcoming movie ' + res.status_message);
      }
    } catch (error) {
      showError('Network request upcoming movie failed.');
    }
  };
};
