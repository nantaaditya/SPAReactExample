import React from "react";        //plugin
import ProductList from "../stores/ProductList";
import Action from "../action/Action";

const products = [
	{ name: "Product-1",
	  complete: false
	},
	{ name: "Product-2",
	  complete: false
	}
];
export default class Products extends React.Component{	
	constructor(props){
		super(props);
		this.state={
			products
		};
	}
	
	createProduct(name){
		this.state.products.push({
			name,
			complete: true
		});
		this.setState({products: this.state.products});
	}
	updateProduct(oldName, newName){
		const foundProduct = _.find(this.state.products, product => product.name === oldName);
		foundProduct.name = newName;
		foundProduct.complete = true;
		this.setState({products: this.state.products});
	}
	toggleProduct(name){
		const foundProduct = _.find(this.state.products, product => product.name === name);
		foundProduct.complete = !foundProduct.complete;
		this.setState({products: this.state.products});
	}
	deleteProduct(nameToDelete){
		_.remove(this.state.products, product => product.name === nameToDelete);
		this.setState({products: this.state.products});
	}
	
	render(){		
		return(
			<div name="product">		
				<Action 
					products={this.state.products}
					createProduct={this.createProduct.bind(this)}
				/>
				<br/>
				<ProductList 
					products={this.state.products}	
					toggleProduct={this.toggleProduct.bind(this)}
					updateProduct={this.updateProduct.bind(this)}
					deleteProduct={this.deleteProduct.bind(this)}
				/>
			</div>
		);
	}
}
