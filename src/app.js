'use strict';

import React from 'react';
import Search from './components/SearchComponent';
import Category from './components/CategoryComponent';
import ProgressBar from './components/ProgressBarComponent';
import ToDo from './components/ToDoComponent';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			categories: [
				{
					id: '1',
					name: 'Category1'
				},
				{
					id: '2',
					name: 'Category2'
				},
				{
					id: '3',
					name: 'Category3',
					children: [
						{
							id: '3.1',
							name: 'Category3.1'
						},
						{
							id: '3.2',
							name: 'Category3.2'
						},
						{
							id: '3.3',
							name: 'Category3.3'
						}
					]
				}
			],
			todoList: [
				{
					categoryId: '1',
					todo: [
						{
							id: '1.1',
							name: 'ToDo item 1.1'
						},
						{
							id: '1.2',
							name: 'ToDo item 1.2'
						},
						{
							id: '1.3',
							name: 'ToDo item 1.3'
						}
					]
				},
				{
					categoryId: '2',
					todo: [
						{
							id: '2.1',
							name: 'ToDo item 2.1'
						},
						{
							id: '2.2',
							name: 'ToDo item 2.2'
						},
						{
							id: '2.3',
							name: 'ToDo item 2.3'
						}
					]
				},
				{
					categoryId: '3.1',
					todo: [
						{
							id: '3.1.1',
							name: 'ToDo item 3.1.1'
						},
						{
							id: '3.1.2',
							name: 'ToDo item 3.1.2'
						},
						{
							id: '3.1.3',
							name: 'ToDo item 3.1.3'
						}
					]
				},
				{
					categoryId: '3.2',
					todo: [
						{
							id: '3.2.1',
							name: 'ToDo item 3.2.1'
						},
						{
							id: '3.2.2',
							name: 'ToDo item 3.2.2'
						},
						{
							id: '3.2.3',
							name: 'ToDo item 3.2.3'
						}
					]
				},
				{
					categoryId: '3.3',
					todo: [
						{
							id: '3.3.1',
							name: 'ToDo item 3.3.1'
						},
						{
							id: '3.3.2',
							name: 'ToDo item 3.3.2'
						},
						{
							id: '3.3.3',
							name: 'ToDo item 3.3.3'
						}
					]
				}
			]
		}
	}

	render() {

		let {todoList = []} = this.state;

		return (
			<div className="holder">
				<h1 className="to-do-header">To-Do List</h1>
				<Search />
				<ProgressBar />
				<div className="main-content clearfix">
					<Category categories={this.state.categories}/>
					<ToDo todoList={todoList}/>
				</div>

			</div>
		)

	}

}

export default App;