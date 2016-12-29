'use strict';

import React from 'react';

class ToDoItem extends React.Component {

	render() {
		return (
			<div className="to-do-item">
				<label htmlFor={"to-do-checkbox_" + this.props.item.id}>
					<input type="checkbox" id={"to-do-checkbox_" + this.props.item.id}/>
					{this.props.item.name}
				</label>
				<i className="fa fa-pencil-square-o"></i>
			</div>
		);
	}

}

export default ToDoItem;