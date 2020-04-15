import React, { Component } from 'react';
import Header from './Header';
import Bills from './Bills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';
import update from 'immutability-helper';

export default class BillsApp extends React.Component {
	constructor() {
		super();
		this.state = {
			AddBillOpen: false,
			allBills: [
				{
					business_name: 'PARTYMOBILE',
					price: 50,
					status: 'unpaid'
				}
			]
		};
	}

	addBillClick = () => {
		this.setState({
			AddBillOpen: !this.state.AddBillOpen
		});
	};

	saveBills = bill => {
		const newBill = update(this.state.allBills, {
			$push: [bill]
		});

		this.setState(
			{
				allBills: newBill,
				AddBillOpen: !this.state.AddBillOpen
			},
			() => {
				console.log(this.state);
			}
		);
	};

	changeBillStatus = billIndex => {
		const allBills = this.state.allBills;
		const bill = allBills[billIndex];
		if (bill.status == 'unpaid') {
			bill.status = 'paid';
		} else {
			bill.status = 'unpaid';
		}

		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	deleteBill = billIndex => {
		const allBills = this.state.allBills;
		allBills.splice(billIndex, 1);
		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});

		this.setState(newState);

		console.log(billIndex);
	};

	render() {
		return (
			<div id="billsapp">
				<Header />
				<Bills
					allBills={this.state.allBills}
					changeBillStatus={this.changeBillStatus}
					deleteBill={this.deleteBill}
				/>
				<AddBill
					AddBillOpen={this.state.AddBillOpen}
					saveBills={this.saveBills}
				/>
				<div className="content-background" />
				<FloatingMenu addBillClick={this.addBillClick} />
			</div>
		);
	}
}
