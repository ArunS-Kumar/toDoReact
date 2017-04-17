import React from 'react';

export class ToDoAppList extends React.Component {

	constructor(props){
		super(props);		
		this.remove = this.remove.bind(this);
	}

	remove(elem) {
		var removeId = elem.target.parentNode.id;
		this.props.remove(removeId);
	}

	render() {

		var items = this.props.tasks.map((elem, i) => {
			return <li id={i} key={i}><span>{elem}</span> <button onClick={this.remove}>x</button> </li> 
		});
		return (
				<ul>
					{items}
				</ul>
			);
	}
}
