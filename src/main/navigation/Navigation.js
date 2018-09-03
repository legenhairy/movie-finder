import React from 'react';
import './Navigation.css';
import Selection from "./Selection";

class Navigation extends React.Component {
	render() {
		return(
			<section className="navigation">
			  <Selection />
			</section>
		)
	}
}

export default Navigation;