import React, {Component} from 'react';
import './app.css';
import {v4 as uuid} from 'uuid';


import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: 'Going to learn React', important: true, like: false, id: uuid()},
				{label: 'That is so good', important: false, like: false, id: uuid()},
				{label: 'I need a break...', important: false, like: false, id: uuid()}
			],
			term: '',
			filter:'all'
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
	}

	/**
	 * 
	 * returns new array without deleted element with passed id 
	 */
	deleteItem(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	/**
	 * 
	 * adds new post with passed body and updates state
	 */
	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: uuid()
		}

		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

/**
 * 
 * toggles passed boolean property of state object
 */
	onToggleProp(id, prop) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, [prop]: !old[prop]};
			
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	onToggleImportant(id) {
		this.onToggleProp(id, 'important');
	}

	onToggleLiked(id) {
		this.onToggleProp(id, 'like');
	}


/**
 * 
 * searches in passed items by passed mask - term
 */
	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter( (item) => {
			return item.label.indexOf(term) > -1
		});
	}
/**
 * 
 * updates current state by passed term 
 */
	onUpdateSearch(term) {
		this.setState({term})
	}



	/**
	 * 
	 * filtrates passed items by filter
	 */

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like)
		} else {
			return items
		}
	}


	/**
	 * 
	 * updates current state by passed filter  
	 */
	onFilterSelect(filter) {
		this.setState({filter})
	}

	render() {

		const {data, term, filter} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<div className="app">	
				<AppHeader 
					liked={liked}
					allPosts={allPosts}
				/>
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<PostList 
					posts={visiblePosts} 
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}/>
				<PostAddForm
					onAdd={this.addItem}
				/>
			</div>
		)
	}
}
