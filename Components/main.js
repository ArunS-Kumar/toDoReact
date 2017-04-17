import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './addlist';


export class Todo extends React.Component {

	constructor(props){
		super(props);	
		this.state = { tasks: props.tasks };	
		this.updateList = this.updateList.bind(this);
		this.removeList = this.removeList.bind(this);
	}

	updateList(text) {
		var updatedtasks = this.state.tasks;
		updatedtasks.push(text);
		this.setState({tasks: updatedtasks});
	}

	removeList(removeId) {
		var updatedtasks = this.state.tasks;
		updatedtasks.splice(removeId,1);
		this.setState({tasks: updatedtasks});
		console.log(updatedtasks);
	}

	render() {
		return (
				<div>	
					<h1>ToDo APP</h1>
					<AddNewTask updateList={this.updateList}/>
					<ToDoAppList tasks={this.state.tasks} remove={this.removeList}/>
				</div>
			);
	}
}
