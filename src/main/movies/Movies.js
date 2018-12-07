import React from 'react';
import './Movies.css';
import MovieListItem from "./MovieListItem";

const Movies = ({movies}) => (
  <section>
  	<ul className="movies">
  	   {movies.map( movie => (
  	  		<MovieListItem key = {movie.id} movie={movie} />
	  	  ))}	
  	</ul>
  </section>	
);
 

export default Movies;