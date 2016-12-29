'use strict';

import React from 'react';

class Search extends React.Component {

	render () {
		return (
			<div className="search-holder clearfix">
				<form className="search" method="POST">
					<label htmlFor="search-checkbox">
						<input id="search-checkbox" type="checkbox"/>
						Show done
					</label>
					<input type="text" placeholder="Search"/>
					<i className="fa fa-trash-o"></i>
				</form>
			</div>
		);
	}

}

export default Search;