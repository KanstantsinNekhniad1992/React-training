'use strict';

import React from 'react';
import CategoryList from './CategoryListComponent';

class CategoryItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {children = [], name} = this.props.item;

		return (
			<div className="category-item">
				<div className="category-tab">
					{name}
					<i className="fa fa-pencil-square-o"></i>
					<i className="fa fa-plus-square-o"></i>
					<i className="fa fa-trash-o"></i>
				</div>
				{(children && children.length) ?
					<i className="fa fa-caret-square-o-down"></i> : ''}
				{(children && children.length) ?
					<CategoryList isSubCategory="true" categories={children}/> : false}
			</div>
		);
	}

}

export default CategoryItem;