'use strict';

import React from 'react';
import CategoryList from './CategoryListComponent';
import ToDoList from './ToDoListComponent';

class CategoryItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="category-item">
				<div className="category-tab">
					{this.props.item.name}
					<i className="fa fa-pencil-square-o"></i>
					<i className="fa fa-plus-square-o"></i>
					<i className="fa fa-trash-o"></i>
				</div>
				{(this.props.item.children && this.props.item.children.length) ?
					<i className="fa fa-caret-square-o-down"></i> : false}
				{(this.props.item.children && this.props.item.children.length) ?
					<CategoryList isSubCategory="true" categories={this.props.item.children}/> : false}
			</div>
		);
	}

}

export default CategoryItem;