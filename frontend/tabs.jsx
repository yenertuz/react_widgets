import React from 'react';

class Tabs extends React.Component {

	constructor(props)
	{
		super(props);

		this.state = {
			index: 0
		}

		this.titles = this.titles.bind(this);
		this.content = this.content.bind(this);
		this.updateTab = this.updateTab.bind(this);
	}

	updateTab(e, index) {
		e.preventDefault();
		this.setState({
			index: index
		});
	}

	titles() {

		const tabsString = this.props.tabs.map(
			(data, index) => 
			{
				if (index == this.state.index)
				{
					var classNaam = "selected-tab";
				}
				else
				{
					var classNaam = "non-selected-tab";
				}
			return (
			<li className={classNaam} key={index} id={index} onClick={(e) => {this.updateTab(e, index)}}>{data.title}</li>
			);
			}
		);

		return (
			<ul className="ul-tabs">
			{tabsString}
			</ul>
		);
	}

	content() {
		return (
			<span>
				{this.props.tabs[this.state.index].content}
			</span>
		)
	}

	render () {
		return (
			<div>
				<h2>Tabs</h2>
				{this.titles()}
				<br /><br />
				{this.content()}
			</div>
		)
	}

}

export default Tabs ;