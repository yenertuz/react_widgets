import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";
import Searchable from "./frontend/searchable";

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {

		const tabs = [
			{title: "shopping list", content: "bananas, cereal, milk, bacon"},
			{title: "best horror movies", content: "get out, the wailing, the witch"}
		]

		return (
			<div>
				<h1>React Widgets</h1>
				<hr></hr>
				<Clock />
				<br /><hr></hr>
				<Tabs tabs={tabs}/>
				<br /><hr></hr>
				<Weather />
				<br /><hr />
				<Searchable contacts={["Yener Tuz", "Peter Griffin", "Stewie Griffin", "Joe Swanson", "Cleveland Brown", "Quagmire", "Pawtucket Patt"]}/>
			</div>
		);
	}

}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
});