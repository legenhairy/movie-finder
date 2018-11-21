import React from 'react';
import './Navigation.css';
import Selection from "./Selection";
import Slider from "./Slider";
import SearchButton from './SearchButton';

class Navigation extends React.Component {
	
	state = {
	  genre: "Comedy",
	  genres: []	
	}

	componentDidMount() {
	  const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  	  fetch(genresURL)
    	.then(response => response.json())
    	.then(data => this.setState({genres: data.genres }))
    	.catch(error => console.log(error));
	}

	render() {
		const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick } = this.props;
		return(
			<section className="navigation">
			  <Selection
			   	 genres={this.state.genres}
			   	 genre={this.state.genre}
			   	 onGenreChange={this.onGenreChange}
			  />
			
			  <Slider data={year} onChange = {onChange}/>	
			  <Slider data={rating} onChange = {onChange}/>
			  <Slider data={runtime} onChange = {onChange}/>	

			  <SearchButton onClick={onSearchButtonClick}/>
			</section>
		)
	}
}

export default Navigation;