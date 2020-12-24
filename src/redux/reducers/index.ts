import Movie from './Movie';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  movie: Movie,
});

export default reducers;
