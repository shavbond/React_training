import React, { Component, useState, useEffect } from 'react';

const BoxComp = () => {
	const ComponentDidMount = () => {
		useEffect(() => {
			console.log('ComponentDidMount');
			return () => {
				console.log('ComponentWillUnmount');
			};
		}, []);
	};

	const ComponentDidUpdate = () => {
		useEffect(() => {
			console.log('ComponentDidUpdate');
		});
	};

	ComponentDidMount();

	ComponentDidUpdate();

	return (
		<div
			className="box"
			style={{
				width: '100%',
				height: '200px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'blue',
				color: 'white'
			}}
		>
			This is a blue box
		</div>
	);
};

export default BoxComp;
