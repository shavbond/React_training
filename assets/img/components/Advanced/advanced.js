import React, { Component, Fragment } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

export default class Advanced extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Shav'
		};
	}

	render() {
		return (
			<div id="advancedFeatures">
				<GrandComp name={this.state.name} />
			</div>
		);
	}
}

const GrandComp = props => {
	return (
		<div className="GrandComp">
			<FatherComp name={props.name} />
		</div>
	);
};

const FatherComp = props => {
	return (
		<div className="FatherComp">
			<ChildComp name={props.name} />
		</div>
	);
};

const ChildComp = props => {
	return (
		<div className="FatherComp">
			{props.name}
			<ChildComp />
		</div>
	);
};
