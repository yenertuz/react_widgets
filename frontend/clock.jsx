import React from 'react';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};

		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmunt() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render () {
		return (
			<div>
				<h2>Clock Widget</h2>
				<span>{this.state.date.toLocaleTimeString()}</span>
			</div>
		);
	}

}

export default Clock ;