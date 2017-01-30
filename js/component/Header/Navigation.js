import React from "react";        //plugin
import {Link,IndexLink} from "react-router";

export default class Navigation extends React.Component{	
	render(){		
		const{location} = this.props;		
		const home	= location.pathname === "/" ? "active" : "";
		const product	= location.pathname.match(/^\/Product/) ? "active" : "";
		const about	= location.pathname.match(/^\/About/) ? "active" : "";
		return(
			<ul class="nav navbar-nav">
				<li class={home}>
				  <IndexLink to="/">
					Home
				  </IndexLink>
				</li>
				<li class={product}>
				  <Link to="Product">
					Product List
				  </Link>
				</li>
				<li class={about}>
				  <Link to="About">
					About Us
				  </Link>
				</li>
			</ul>		
		);
	}
}
