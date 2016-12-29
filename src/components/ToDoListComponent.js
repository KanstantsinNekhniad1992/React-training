'use strict';

import React from 'react'
import ToDoItem from './ToDoItemComponent';

class ToDoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {todo = []} = this.props;

		return (
			<ul className="to-do-list">
				{todo.map((item) =>
					<li key={item.id}>
						<ToDoItem item={item}/>
					</li>
				)}
			</ul>
		);

	}

}

ToDoList.propTypes = {
	todo: React.PropTypes.array.isRequired
};

export default ToDoList;