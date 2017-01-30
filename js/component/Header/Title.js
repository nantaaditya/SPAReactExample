import React from "react";        //plugin

export default class Title extends React.Component{	
	render(){		
		const title = "Tutorial";
		return(			
			<a class="navbar-brand" href="#">{title}</a>			
		);
	}
}
