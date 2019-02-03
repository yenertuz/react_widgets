import React from 'react';

class Searchable extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			searchString: "",
			contacts: this.props.contacts
		}

		this.renderContacts = this.renderContacts.bind(this);
		this.isSearchEquivalent = this.isSearchEquivalent.bind(this);
		this.updateSearch = this.updateSearch.bind(this);
	}

	isSearchEquivalent(firstString, secondString) {
		var searchLength = Math.min(firstString.length, secondString.length);
		if (searchLength == 0)
			return true;
		var firstModified = firstString.substring(0, searchLength).toLowerCase();
		var secondModified = secondString.substring(0, searchLength).toLowerCase();
		if (firstModified == secondModified)
			return true ;
		else 
			return false ;
	}

	updateSearch(e) {
		e.preventDefault();
		this.setState({
			searchString: e.target.value
		});
	}

	renderContacts() {
		const contactList = this.state.contacts.map(
			(contact, index) => {
				if (this.isSearchEquivalent(this.state.searchString, contact))
					return (<li key={index}>{contact}</li>);
				else
					return ("");
			}
		);
		return (<ul className="ul-contacts" >{contactList}</ul>);
	}

	render() {
		return (
		<div>
			<h2>Searchable</h2>
			<input onChange={this.updateSearch} type="text" placeholder="Search contacts"></input> <br /><br />
			<span>{this.renderContacts()}</span>
		</div>
		);
	}

}

export default Searchable ;