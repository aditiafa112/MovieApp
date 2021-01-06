import {
  CLEAR_FAVORITE_MOVIE_LIST,
  SET_FAVORITE_MOVIE_LIST,
  DELETE_FAVORITE_MOVIE_LIST,
  UPDATE_FAVORITE_MOVIE_LIST,
} from '../../constants';

const initialState = {
  favMovie: [],
};

const FavMovie = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_FAVORITE_MOVIE_LIST:
      return {
        ...state,
        favMovie: [],
      };
    case SET_FAVORITE_MOVIE_LIST:
      return {
        ...state,
        favMovie: action.value,
      };
    case UPDATE_FAVORITE_MOVIE_LIST:
      return {
        ...state,
        favMovie: action.value,
      };
    case DELETE_FAVORITE_MOVIE_LIST:
      return {
        ...state,
        favMovie: action.value,
      };
    default:
      return state;
  }
};

export default FavMovie;
