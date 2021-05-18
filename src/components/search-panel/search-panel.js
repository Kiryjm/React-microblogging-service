import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
	}


/**
 * 
 * gets printed value, updates current state and App  component state with new value
 */
	onUpdateSearch(e) {
		const term = e.target.value;
		// same as setState({term: term});
		this.setState({term});
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input
				className="from-control search-input"
				type="text"
				placeholder="Post search"
				onChange={this.onUpdateSearch}
			/>
		)
	}
}

