'use strict';

import React from 'react';
import CategoryList from './CategoryListComponent';
import NewCategory from './NewCategoryComponent';

class Category extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="categories-holder">
				<NewCategory />
				<CategoryList categories={this.props.categories}/>
			</div>
		);
	}

}

export default Category;