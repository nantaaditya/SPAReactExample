import _ from "lodash";
import React from "react";        //plugin

export default class Action extends React.Component{
	constructor(props){
		super(props);
		this.state={
			error:null
		};
	}
	handleCreate(){
		event.preventDefault();
		console.log(this.refs.createInput.value);	
		const createInput	= this.refs.createInput;
		const product		= createInput.value;
		const validateInput	= this.validateInput(product);
		
		if(validateInput){
			this.setState({error:validateInput});
			return;
		}
		
		this.setState({error:null});				
		this.props.createProduct(product);
		this.refs.createInput.value = "";
	}
	validateInput(name){
		if(!name){
			return "Please enter product's name.";
		}else if(_.find(this.props.products, product => product.name === name)){
			return "Product already exist.";
		}else{
			return null;
		}		
	}
	renderError(){
		if(!this.state.error){
			return null;
		}else{
			return (
				<div class="alert alert-danger alert-dismissable" >
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>{this.state.error}</strong>
				</div>
			);
		}
	}	
	
	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<label class="label label-primary">Product</label>
				<br/>
				<div class="input-group">
					<input type="text" placeholder="Input new product" class="form-control" ref="createInput"/>		
					<div class="input-group-btn"><button class="btn btn-success"> Save</button></div>
				</div>
				{this.renderError()}
			</form>
		);
	}
}
