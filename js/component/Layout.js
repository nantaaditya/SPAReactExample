import React from "react";        //plugin

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{	
	render(){					
		const{ location } = this.props;
		return(
			<div>
				<Header location={location}/>
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" location={location}>
							{this.props.children}
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}
