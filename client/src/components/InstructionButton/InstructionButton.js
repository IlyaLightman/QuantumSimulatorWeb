import React from 'react'
import Radium from 'radium';

import './InstructionButton.scss'

// props: instruction (SET, H, ...), parameters ([Q, Q], [Q, R], [Q], ...), color
const InstructionButton = props => {


	return (
		<React.Fragment>
			<div
				className='InstructionButton'
				onClick={() => {}}
			>
				<div className='LeftRectangle'/>
				<h3 className='InstructionTitle'>SET</h3>
				<div className='Parameters'>Q R</div>
				<div className='ShadowRectangle'/>
			</div>
		</React.Fragment>
	)
}

export default Radium(InstructionButton)