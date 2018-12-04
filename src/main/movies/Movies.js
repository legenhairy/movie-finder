import React, { Component } from 'react';
import './Movies.css';
import MovieListItem from "./MovieListItem";

class Movies extends Component {
  state = {
  	movies: []
  }

  componentDidMount() {
    this.fetchMovies(this.props.url); 
  }

  /*when we get a new movie url, we will fetch those new movies with the criteria*/
  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchMovies(nextProps.url);
    }
  }

  fetchMovies = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.storeMovies(data))
      .catch(error => console.log(error));
  }

  storeMovies = data => {
	const movies = data.results.map(result => {
		const { vote_count, 
				id, genre_ids, 
				poster_path, title, 
		  		vote_average, 
		  		release_date
		  	  } = result;	
	      return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date};
		});
		/*we get total_pages as part of the data object from the api*/
    this.setState({ movies });
  }

  render() {
  	return (
	    <section>
  	    <ul className="movies">
  	  	   {this.state.movies.map((movie,index) => (
  	  		   <MovieListItem key = {movie.id} movie={movie} />
	  	     ))}	
  	    </ul>
  	  </section>	
 	);
  }
}

export default Movies;