import {
  CLEAR_FAVORITE_MOVIE_LIST,
  DELETE_FAVORITE_MOVIE_LIST,
  SET_FAVORITE_MOVIE_LIST,
  UPDATE_FAVORITE_MOVIE_LIST,
} from '../../constants';
import {getData, showError, storeData} from '../../../utils';

export const clearFavoriteMovie = () => ({
  type: CLEAR_FAVORITE_MOVIE_LIST,
});

export const setFavoriteMovie = () => {
  return async (dispatch: any) => {
    try {
      getData('favMovie').then((res) => {
        dispatch({type: SET_FAVORITE_MOVIE_LIST, value: res ? res : []});
      });
    } catch (error) {
      showError('failed to store.');
    }
  };
};

export const updateFavoriteMovie = (data?: any) => {
  return async (dispatch: any) => {
    try {
      getData('favMovie').then((res) => {
        res = res ? [...res, data] : [data];
        storeData('favMovie', res);
        dispatch({type: UPDATE_FAVORITE_MOVIE_LIST, value: res});
      });
    } catch (error) {
      showError('failed to store.');
    }
  };
};

export const deleteFavoriteMovie = (data?: any) => {
  return async (dispatch: any) => {
    try {
      getData('favMovie').then((res) => {
        res = res.filter((item: any) => item.id !== data.id);
        storeData('favMovie', res);
        dispatch({type: DELETE_FAVORITE_MOVIE_LIST, value: res});
      });
    } catch (error) {
      showError('failed to store.');
    }
  };
};
