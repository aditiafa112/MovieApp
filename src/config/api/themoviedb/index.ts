const getUpcomingMovie = async () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=630b4b8f3dc2b01f4ce453bccef566b4&language=en-US&page=1`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return error.diagnostic.message;
    });
};

const Api = {
  getUpcomingMovie,
};

export default Api;
