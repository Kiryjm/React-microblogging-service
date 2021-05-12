import React from 'react';
import './app.css';
// import './test.css';
// import style from './App.module.css';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import styled from 'styled-components';

const AppBlock = styled.div`
	margin: 0 auto;
  	max-width: 800px;
`
const StyledAppBlock = styled(AppBlock)`
	background-color: darkslategray;
`

const App = () => {

	const data = [
		
		{label: 'Going to learn React', important: true, id: 'asgh'},
		{label: 'That is so good', important: false, id: 'ehhx'},
		{label: 'I need a break...', important: false, id: 'sdgl'}
	];

	return (
		<StyledAppBlock>	
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts={data} />
			<PostAddForm/>
		</StyledAppBlock>
	)
}

export default App;