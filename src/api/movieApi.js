class MovieApi{
  constructor() {
  }
  static getMovies(query, param) {
    let apiKey = 'api_key=2be7d8ea984bb55c6cefc8e86802870c'
    return fetch(`https://api.themoviedb.org/3/movie/${query}?${apiKey}&${param}`, {
      method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
      return error;
    });
  }
}

export default MovieApi;