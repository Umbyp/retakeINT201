class Movies {
    movies
    constructor() {
      this.movies = []
    }
  
    getAllMovies() {
      return this.movies
    }
  
    addMovie(title, director, year, genre) {
      const params = [ title, director, year, genre ]
      if (params.some(param => param === null || param === undefined)) {
        return undefined
      }
      if (this.movies.some(movie => movie.title.toLowerCase() === title.toLowerCase() && movie.director.toLowerCase() === director.toLowerCase())) {
        return undefined
      }
      const newMovie = { 'title': title, 'director': director, 'year': year, 'genre': genre }
      this.movies.push(newMovie)
      return newMovie
    }
  
    updateMovie(title, updatedDetails) {
      if (this.movies.every(movie => movie.title.toLowerCase() !== title.toLowerCase())) {
        return undefined
      }
      const editMovieIndex = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase())
      this.movies[editMovieIndex] = {...this.movies[editMovieIndex],...updatedDetails}
      return this.movies[editMovieIndex]
    }
  
    deleteMovieByTitle(title) {
      if (this.movies.every(movie => movie.title.toLowerCase() !== title.toLowerCase())) {
        return 'no movie deleted'
      }
      const editMovieIndex = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase())
      const deletedMovie = this.movies.splice(editMovieIndex, 1)
      return `a movie object ${deletedMovie} is deleted`
    }
  }
  
  module.exports = Movies