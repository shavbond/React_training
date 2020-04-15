import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			currentNumber: 0,
			status: 'manual'
		};
	}

	componentWillMount() {}

	componentDidMount() {
		if (this.props.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.autoCounter();
				}
			);
		}
	}

	plusOne = () => {
		this.setState({
			currentNumber: this.state.currentNumber + 1
		});
	};

	tekOne = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};

	autoCounter = () => {
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};

	render() {
		const styleCounterComp = {
			maxWidth: '400px',
			width: '100%',
			margin: '100px 0'
		};

		const styleNumber = {
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center'
		};

		const styleButtons = {
			display: this.props.status == 'auto' ? 'none' : 'flex',
			cursor: 'pointer'
		};
		return (
			<div className="counter-comp" style={styleCounterComp}>
				<div className="Number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="minus"
						hoverColor="purple"
						backgroundColor="black"
						fontColor="red"
						trigger={this.tekOne}
					>
						-
					</Button>
					<Button action="plus" hoverColor="green" trigger={this.plusOne}>
						+
					</Button>
				</div>
			</div>
		);
	}
}
