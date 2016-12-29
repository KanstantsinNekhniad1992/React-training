'use strict';

import React from 'react';
import ToDoList from './ToDoListComponent';

class ToDo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {todoList = []} = this.props;

		return (
			<ul className="to-do-holder">
				{todoList.map((item) =>
					<li key={item.categoryId}>
						<ToDoList todo={item.todo}/>
					</li>
				)}
			</ul>
		);
	}

}

ToDo.propTypes = {
	todoList: React.PropTypes.array.isRequired
};

export default ToDo;