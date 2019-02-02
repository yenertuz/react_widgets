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
		this.updateResponse = this.updateResponse.bind(this);
	}

	getResponse(input) {
		var ajax = new XMLHttpRequest();
		var queryObject = {
			// q: input,
			appid: "5db9a5e9ab33cbbd37f2aaea7432d644"
		};
		if ("0123456789".includes(input[0])) {
			queryObject.zip = input;
		}
		else {
			queryObject.q = input;
		}
		var queryString = Object.keys(queryObject).map(
			(key) => {
				return encodeURIComponent(key) + "=" + encodeURIComponent(queryObject[key])
			}).join("&");
		var ajaxURL = "https://api.openweathermap.org/data/2.5/weather?" + queryString
		ajax.open("GET", ajaxURL, false);
		ajax.send();
		return (ajax.responseText);
	}

	updateResponse() {
		const input = this.state.input;
		this.setState(
			{
				response: this.getResponse(input)
			}
		);
	}

	changeInput(e) {
		this.setState(
			{
				input: e.target.value
			}
		);

		clearTimeout(this.timeout);
		this.timeout = setTimeout(this.updateResponse, 2000);
	}

	render () {

		return (
			<div>
				<h2>Weather</h2>
				<input type="text" onChange={this.changeInput} placeHolder="Enter zip or city"></input>
				<br /> <br />
				<div>{this.state.response}</div>
			</div>
		);

	}

}

export default Weather ;