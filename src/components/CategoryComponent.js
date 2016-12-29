'use strict';

import React from 'react';
import CategoryList from './CategoryListComponent';
import CreateCategory from './CreateCategoryComponent';

class Category extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {categories = []} = this.props;

		return (
			<div className="categories-holder">
				<CreateCategory />
				<CategoryList categories={categories}/>
			</div>
		);
	}

}

export default Category;