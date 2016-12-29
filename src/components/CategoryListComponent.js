'use strict';

import React from 'react';
import CategoryItem from './CategoryItemComponent';

class CategoryList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<ul className={"category-list " + (this.props.isSubCategory ? 'sub-category' : '')} >
				{this.props.categories.map(
					(item) => <li key={item.id}><CategoryItem item={item} /></li>
				)}
			</ul>
		);

	}

}

export default CategoryList;