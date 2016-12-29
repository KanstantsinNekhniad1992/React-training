'use strict';

import React from 'react';

class ToDoItem extends React.Component {

	render() {

		let id,
			{item} = this.props;

		id = 'to-do-checkbox_' + item.id;

		return (
			<div className="to-do-item">
				<label htmlFor={id}>
					<input type="checkbox" id={id}/>
					<span>{item.name}</span>
				</label>
				<i className="fa fa-pencil-square-o"></i>
			</div>
		);
	}

}

export default ToDoItem;