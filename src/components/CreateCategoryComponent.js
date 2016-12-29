'use strict';

import React from 'react';

class CreateCategory extends React.Component {

	render() {
		return (
			<form className="add-category" method="POST">
				<input type="text" placeholder="Enter category title"/>
				<input type="submit" value="Add"/>
			</form>
		);
	}

}

export default CreateCategory;