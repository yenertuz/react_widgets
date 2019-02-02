import React from 'react';

class Weather extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input: "",
			response: ""
		};

		this.changeInput = this.changeInput.bind(this);
		this.getResponse = this.getResponse.bind(this);
	}

	getResponse(input) {
		test = fetch("http://www.google.com")
			.then(res => res.json())
			.then(data => alert(data));
		return ("foo");
	}

	changeInput(e) {
		this.setState(
			{
				input: e.target.value,
				response: this.getResponse(e.target.value)
			}
		);
	}

	render () {

		return (
			<div>
				<h2>Weather</h2>
				<input type="text" onChange={this.changeInput} placeHolder="Enter zip or city"></input>
				<br /> <br />
				<button onClick={() => { alert(this.state.input); }}>Debug</button>
				<br /><br />
				<div>{this.state.response}</div>
			</div>
		);

	}

}

export default Weather ;