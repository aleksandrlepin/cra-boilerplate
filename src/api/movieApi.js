class MovieApi{
  constructor() {
    this.apiKey = 'api_key=2be7d8ea984bb55c6cefc8e86802870c';
  }
  static getMovies() {
    let apiKey = 'api_key=2be7d8ea984bb55c6cefc8e86802870c'
    return fetch(`https://api.themoviedb.org/3/search/movie?${apiKey}&query='taxi'`, {
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