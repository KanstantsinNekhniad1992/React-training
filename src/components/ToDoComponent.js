'use strict';

import React from 'react';
import ToDoList from './ToDoListComponent';

class Category extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="to-do-holder">
				{(this.props.todos && this.props.todos.length) ? this.props.todos.map((item) =>
						<li key={item.categoryId}><ToDoList todo={item.todo}/></li>
					): false}
			</ul>
		);
	}

}

export default Category;