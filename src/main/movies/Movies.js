import React from 'react';
import './Movies.css';
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";

const Movies = ({movies, page, onPageIncrease, onPageDecrease}) => (
  <section>
  	<ul className="movies">
  	   {movies.map( movie => (
  	  		<MovieListItem key = {movie.id} movie={movie} />
	  	  ))}	
  	</ul>
    <div className="pagination">
      <Button onClick={onPageDecrease}>Last Page</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next Page</Button>
    </div>
  </section>	
);
 

export default Movies;