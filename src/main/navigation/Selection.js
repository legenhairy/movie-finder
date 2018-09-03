import React from "react";


class Selection extends React.Component {
	state = {
		genre: 'comedy'
	}

	onGenreChange = event => {
		this.setState({ genre: event.target.value });
	}

	render() {
		return (
		  <div className = "selection">	
		  	<label>Genre</label>
		  	<select value={this.state.genre} onChange ={this.onGenreChange}>
		  	 	<option value="comedy"> Comedy </option>
		  	 	<option value="action"> Action</option>
		  	 	<option value="drama"> Drama </option>		
		  	</select>
		  </div>	
		)	
	}

}

export default Selection;