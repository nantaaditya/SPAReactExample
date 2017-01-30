import React from "react";        //plugin

export default class ProductItem extends React.Component{
   	constructor(props){
		super(props);
		this.state = {
			isEditing: false
		}
	}
	
	onEditClick(){
		this.setState({isEditing: true});
	}
	onCancelClick(){
		this.setState({isEditing: false});
	}
	onUpdateClick(event){
		event.preventDefault();
		const oldName = this.props.name;
		const newName = this.refs.editInput.value;
		this.props.updateProduct(oldName, newName);
		this.setState({isEditing: false});
	}
	
	renderProductSection(){
		const{name, complete} 	= this.props;					
		const productStyle 	= {
			color : complete ? "green":"red",
			cursor: "pointer"
		};
		if(this.state.isEditing){
			return(
				<td>
					<form onSubmit={this.onUpdateClick.bind(this)}>
						<input type="text" class="form-control" defaultValue={name} ref="editInput"/>
					</form>	
				</td>
			);
		}
		return(
			<td style={productStyle} onClick={this.props.toggleProduct.bind(this, name)}>
				{name}
			</td>
		);
	}	
	renderActionSection(){
		if(this.state.isEditing){
			return(
				<td>
					<button class="btn btn-primary" onClick={this.onUpdateClick.bind(this)}>Update</button>
					<button class="btn btn-warning" onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}
		return(
			<td>
				<button class="btn btn-warning" onClick={this.onEditClick.bind(this)}>Edit</button>
				<button class="btn btn-danger" onClick={this.props.deleteProduct.bind(this, this.props.name)}>Delete</button>
			</td>	
		);
	}
	
	render(){
		return(
			<tr>
				{this.renderProductSection()}
				{this.renderActionSection()}														
			</tr>
		)
	}
}
