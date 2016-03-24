import React, { PropTypes, Component } from 'react';
import Radium from  'radium';
import DIGGIT_WORDS from '../constants/diggitWords';

let styles = {
	diggit: {
		background: '#FF4081',
		borderRadius: '50%',
		fontSize: '10px',
		padding: '5px',
		color: '#FBFBFB',
		border: '1px solid #028DD1',
	},
}

@Radium
export default class DiggIt extends Component {

	render() {
		var text = this.props.text.toLowerCase();
		var diggit;
		if (DIGGIT_WORDS.some(function(string) {
			return text.indexOf(string) >= 0;})) {
			diggit =
					<div><i className='fa fa-check' style={styles.diggit}></i>  DIGG-IT!</div>
		} 
		else {
			diggit = ''
		}

		return (
			<div>
				{diggit}
			</div>
		)
	}

}

DiggIt.propTypes = {
	text: PropTypes.string.isRequired
}
