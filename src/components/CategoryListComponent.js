'use strict';

import React from 'react';
import CategoryItem from './CategoryItemComponent';

class CategoryList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {categories = []} = this.props;
		let categoryClassName = "category-list " + (this.props.isSubCategory ? 'sub-category' : '');

		return (
			<ul className={categoryClassName}>
				{categories.map((item) =>
					<li key={item.id}>
						<CategoryItem item={item}/>
					</li>
				)}
			</ul>
		);

	}

}

CategoryList.propTypes = {
	categories: React.PropTypes.array.isRequired
};

export default CategoryList;