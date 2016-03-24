import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

let styles = {
	todo: {
		color: '#727272',
	},
	input: {
		padding: '5px 15px',
		fontSize: '14px',
		width: '250px',
		outline: 'none',
	}
}

@Radium
export default class AddItem extends Component {

	handleSubmit(e) {
		if(e.keyCode === 13) {
			let newItem = this.refs.newItem.value;
			this.refs.newItem.value = '';
			this.props.add(newItem);
		}
	}

	render() {
		return (
			<div style={styles.todo}>
				<input style={styles.input} type='text' ref='newItem' placeholder='insert a TODO' onKeyDown={this.handleSubmit.bind(this)} />
			</div>
		)
	}
}

AddItem.propTypes = {
	add: PropTypes.func.isRequired
}