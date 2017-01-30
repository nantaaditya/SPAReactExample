import React from "react";        //plugin

import Title from "./Footer/Title";

export default class Footer extends React.Component{	
	render(){		
		return(
			<div class="navbar navbar-default navbar-fixed-bottom">
				<div class="container">
					<Title/>	
				</div>   
			</div>
		);
	}
}