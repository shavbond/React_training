import React, { Component } from 'react';

export default class Bills extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			price: '',
			status: 'unpaid'
		};
	}

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type == 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		event.preventDefault();
		this.setState({
			business_name: '',
			price: 0
		});
		this.props.saveBills(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<section
				id="addBill"
				className={`${this.props.AddBillOpen == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Bill</label>
							<input
								type="text"
								id="business_name"
								onChange={this.inputChange}
								value={this.state.business_name}
								name="business_name"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								onChange={this.inputChange}
								name="price"
								value={this.state.price}
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}
