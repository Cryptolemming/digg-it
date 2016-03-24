import React, { PropTypes, Component } from 'react';
import DiggIt from './DiggIt';
import Radium from 'radium';

const styles = {
	todoContainer: {
		color: '#727272',
		margin: '0 auto',
		alignItems: 'center',
		padding: ' 0 5vw',
	},
	todoList: {
		padding: 0,
	},
	todoText: {
		fontSize: '30px',
		textAlign: 'center',
		fontStyle: 'italic',
		fontFamily: 'cursive !important',
		wordBreak: 'break-all',
	},
	features: {
		width: '55vw',
		minWidth: '250px',
		display: 'block',
		padding: 0,
		margin: '0 auto',
		alignItems: 'center',
	},
	remove: {
		fontSize: '18px',
		background: 'transparent',
		border: 0,
		color: '#727272',
	},
	removeLi: {
		display: 'inline-block',
	},
	diggitLi: {
		display: 'inline-block',
		float: 'right',
	},
}

@Radium
export default class List extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		let handleListItems = this.props.items.map((item, index) => {
			return(
				<li key={index} style={styles.todoContainer}>
					<p style={styles.todoText} className='todo-text'>'{item}'</p>
					<ul style={styles.features}>
						<li style={styles.removeLi}>
							<button style={styles.remove} onClick={this.props.remove.bind(null, index)}>completed ?</button>
						</li>
						<li style={styles.diggitLi}>
							<DiggIt style={styles.diggit} text={item} />
						</li>
					</ul>
				</li>
			)
		});

		return (
			<ul style={styles.todoList}>
				{handleListItems}
			</ul>
		)
	}
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	remove: PropTypes.func.isRequired
}