import React from 'react';
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
	state = {
	  url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
	  genre: 'comedy',
	  genres: [],
	  year: {
	  	label: "year",
	  	min: 1990,
	  	max: 2017,
	  	step: 1,
	  	value: { min: 2000, max: 2017 }
	  }	,
	  rating: {
	  	label: "rating",
	  	min: 0,
	  	max: 10,
	  	step: 1, 
	  	value: { min: 8, max: 10 }
	  },
	  runtime: {
	  	label: "runtime",
	  	min: 0,
	  	max: 300,
	  	step: 15,
	  	value: { min: 60, max: 120 }
	  }
	};

	onChange = (data) => {
		this.setState({
		  [data.type]: {
		  	...this.state[data.type],
		  	value: data.value
		  }	
		});
	}

	setGenres = (genres) => {
		this.setState({genres});
	}

	onGenreChange = (event) => {
		this.setState({ genre: event.target.value });
	}

	render() {
	  return (
	  	<section className="main">
	  		<Navigation 
	  		  onChange={this.onChange}
	  		  onGenreChange={this.onGenreChange}
	  		  setGenres={this.setGenres}
	  		  {...this.state}
	  		/>
	  		<Movies />
	  	</section>
	  )
	}

}

export default Main;