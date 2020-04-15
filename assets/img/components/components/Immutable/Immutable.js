import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends React.Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Shayza', 'connell', 'jean'],
			both: [],
			dons: ['kartel', 'gullygad', 'sparta'],
			user: {
				name: 'Shav',
				age: 24,
				location: 'Jamrock',
				grades: {
					math: 'A',
					english: 'B+',
					science: 'C-',
					gym: 'D'
				}
			}
		};
	}

	clickedBtn = () => {
		const newDons = update(this.state.dons, {
			$push: ['Masicka']
		});

		const newState = update(this.state, {
			dons: { $set: newDons }
		});

		// console.log(newDons);
		this.setState(newState, () => {
			console.log(this.state);
		});
		alert('CLICKED BTN');
	};

	changeToActive = () => {
		if (this.state.dons[3] == 'Masicka') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className={`box ${this.changeToActive()}`} />
				<div className="button" onClick={this.clickedBtn}>
					Press Mi
				</div>
			</div>
		);
	}
}
