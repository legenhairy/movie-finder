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

	componentWillReceiveProps(nextProps) {
	  if(this.props.url !== nextProps.url) {
	  	this.fetchMovies(nextProps.url);
	  }
	}

	fetchMovies = (url) => {
	  fetch(url)
		  .then(response => response.json())
		  .then(data => this.storeMovies(data))
		  .catch(error => console.log(error))
	}


	storeMovies = data => {
		const movies = data.results.map(result => {
		  const { vote_count, id, genre_ids, poster_path, title, 
		  		vote_average, 
		  		release_date
		  		} = result;	
	      return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date};
		});
		
		this.setState({movies});
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