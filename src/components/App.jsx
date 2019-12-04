import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovieById = id => {
    const updateMovies = this.state.movies.filter(function(movie) {
      return movie.id !== id
    });
    this.setState({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeMovieFromWillWatch = id => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(movie) {
      return movie.id !== id
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6" key={movie.id}>
                    <MovieItem 
                      item={movie} 
                      removeMovieById={this.removeMovieById} 
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Movies will watch: {this.state.moviesWillWatch.length}</p>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => {
                return (
                  <li className="list-group-item" key={movie.id}>
                    <div className="d-flex justify-content-between">
                      <p>{movie.title}</p>
                      <p>{movie.vote_average}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
