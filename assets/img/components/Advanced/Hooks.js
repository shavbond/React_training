import React, { Component, useState } from 'react';
import BoxComp from './BoxComp';

// USING CLASS COMPONENTS FOR STATE

// export default class Hooks extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: 'Shav'
// 		};
// 	}
// 	render() {
// 		return (
// 			<div id="HooksApp">
// 				<h1>Hooks Training {this.state.name}</h1>
// 			</div>
// 		);
// 	}
// }

// USING HOOKS INSTEAD

const Hooks = () => {
	const [state, setState] = useState({
		name: 'Shav',
		total: 0
	});

	const btnClick = () => {
		setState({
			name: 'Shaviel',
			total: state.total + 1
		});
	};

	const displayBox = () => {
		if (state.total === 0) {
			return <div>Loading.....</div>;
		} else if (state.total === 1) {
			return <BoxComp />;
		} else {
			return <div>No box left!</div>;
		}
	};

	return (
		<div id="HooksApp">
			<h1>Working on Hooks with {state.name}</h1>
			<div
				className="btn"
				onClick={btnClick}
				style={{
					background: 'red',
					color: 'white',
					padding: '20px'
				}}
			>
				Change Name
			</div>
			{displayBox()}
		</div>
	);
};

export default Hooks;
