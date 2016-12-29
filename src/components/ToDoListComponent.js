'use strict';

import React from 'react'
import ToDoItem from './ToDoItemComponent';

class ToDoList extends React.Component {

	constructor (props) {
		super(props);
	}

	render() {

		return (
			<ul className="to-do-list">
				{(this.props.todo && this.props.todo.length) ? this.props.todo.map((item) =>
						<li key={item.id}><ToDoItem item={item}/></li>
				): false}
			</ul>
		);

	}

}

export default ToDoList;