import React, { Component } from 'react';
import './Movies.css';
import MovieListItem from "./MovieListItem";

class Movies extends Component {
  state = {
  	movies: []
  }

  componentDidMount() {
  	const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  	fetch(apiUrl)
  	  .then(response => response.json())
  	  .then(data => this.storeMovies(data))
  	  .then(error => console.log(error))
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