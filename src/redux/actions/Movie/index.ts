import {requestGet} from '../../../config/api';
import {API_URL, UPCOMING_MOVIE, NOW_PLAYING_MOVIE} from '../../../config';
import {
  CLEAR_MOVIE_COMING_SOON_LIST,
  SET_MOVIE_COMING_SOON_LIST,
  CLEAR_MOVIE_NOW_PLAYING_LIST,
  SET_MOVIE_NOW_PLAYING_LIST,
  // CLEAR_MOVIE_TRENDING_LIST,
  // SET_MOVIE_TRENDING_LIST,
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
      if (res.results) {
        dispatch({type: SET_MOVIE_COMING_SOON_LIST, value: res.results});
      } else {
        showError('Error when request upcoming movie' + res.status_message);
      }
    } catch (error) {
      showError('Network request upcoming movie failed.');
    }
  };
};
