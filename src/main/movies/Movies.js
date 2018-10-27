import React from 'react';
import './Movies.css';
import MovieListItem from "./MovieListItem";


class Movies extends React.Component {
	constructor(props){
		super(props);
		this.state = {
	 	  movies: []	
		}	
   }
	/**call the nw fetchMovies component on first load*/
	componentDidMount() {
	  this.fetchMovies(this.props.url);	
	}

	/**refetch a new url based on user choices, uses this lifecycl method to compare props*/
	componentWillReceiveProps(nextProps) {
	  if(this.props.url !== nextProps.url) {
	  	this.fetchMovies(nextProps.url);
	  }
	}

	render() {
		return(
			<section className="movies">
			  <ul className="movies">	
			   {this.state.movies.map( movie => (
			  	 <MovieListItem key = {movie.id} movie={movie} />
			  	))}
			  </ul>
			</section>
		)
	}
}

export default Movies;