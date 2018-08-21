import React from 'react';
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
	render() {
	  return (
	  	<section className="main">
	  		<Navigation />
	  		<Movies />
	  	</section>
	  )
	}

}

export default Main;