import React from "react";        //plugin

import Title from "./Header/Title";
import Navigation from "./Header/Navigation";

export default class Header extends React.Component{	
	render(){			
		const{ location } = this.props;
		console.log(location);
		return(
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<Title/>
					</div>
					<Navigation location={location}/>
				</div>
			</nav>
		);
	}
}
