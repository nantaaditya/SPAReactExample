import _ from "lodash";
import React from "react";//plugin
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component{		
	renderItems(){
		const props = _.omit(this.props, 'product');
		return _.map(this.props.products, (product, index)=>
		<ProductItem key={index}{...product} {...props}/>);
	}
	render(){	
		return(
			<table class="table table-hover">
				<thead>
					<tr>
						<td>Product</td>
						<td>Option</td>
					</tr>					
				</thead>
				<tbody>		
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}
