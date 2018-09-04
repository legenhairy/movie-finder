import React from "react";
import "./Selection.css";


const Selection = ( {genre, onGenreChange} ) => (
  <div className="selection">	
  	<label>Genre</label>
  	<select value={genre} onChange={onGenreChange}>
  		<option value="comedy">Comedy</option>
  		<option value="comedy">Comedy</option>
  		<option value="comedy">Comedy</option>
  	</select>
  </div> 	
);


export default Selection;