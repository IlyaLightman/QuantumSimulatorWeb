import React from 'react'
import Radium from 'radium';

import './InstructionButton.scss'

// props: instruction (SET, H, ...), parameters ([Q, Q], [Q, R], [Q], ...), color
const InstructionButton = props => {


	return (
		<React.Fragment>
			<div
				className='InstructionButton'
				onClick={() => props.onClick()}
			>
				<div className='LeftRectangle' style={{
					backgroundColor: props.color
				}}/>
				<h3 className='InstructionTitle'>{
					props.instruction
				}</h3>
				<div className='Parameters'>{
					props.parameters
				}</div>
				<div className='ShadowRectangle'/>
			</div>
		</React.Fragment>
	)
}

export default Radium(InstructionButton)