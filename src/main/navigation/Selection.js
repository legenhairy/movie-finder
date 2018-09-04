import React from "react";
import "./Selection.css";


const Selection = ( {genre, onGenreChange} ) => (
  <div className="selection">	
  	<label>Genre</label>
  	<select value={genre} onChange={onGenreChange}>
  		<option value="comedy">Comedy</option>
  		<option value="action">Action</option>
  		<option value="drama">Drama</option>
  	</select>
  </div> 	
);


export default Selection;