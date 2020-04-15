import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter.js';
import Immutable from './components/Immutable/Immutable.js';
import BillsApp from './components/BillsApp/Billsapp.js';
import Hooks from './Advanced/Hooks';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className={'container'}>
				<BillsApp />
				{/* <Immutable /> */}
				{/* <Counter status="manual" /> */}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
