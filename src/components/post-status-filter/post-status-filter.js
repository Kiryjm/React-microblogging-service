import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';


const PostStatusFilter = () => {
	return (
		<div className="btn-group">
			<Button color="info">All</Button>
			<button type="button" className="btn btn-info">All</button>
			<button type="button" className="btn btn-outline-secondary">Liked</button>
		</div>
	)
}

export default PostStatusFilter;