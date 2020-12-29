import {API_KEY, API_LANGUAGE} from '../..';

export const upcomingMovieData = (page = 1): any => {
  return {
    api_key: API_KEY,
    language: API_LANGUAGE,
    page: page,
  };
};

export const detailsMovieData = (movieId: number, append = 'videos'): any => {
  return {
    movie_id: movieId,
    api_key: API_KEY,
    language: API_LANGUAGE,
    append_to_response: append,
  };
};
