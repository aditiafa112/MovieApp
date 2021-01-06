import Movie from './Movie';
import FavMovie from './FavMovie';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  movie: Movie,
  favMovie: FavMovie,
});

export default reducers;
