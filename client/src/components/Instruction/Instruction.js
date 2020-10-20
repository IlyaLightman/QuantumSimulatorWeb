import React from 'react';
import './Instruction.scss'

const Instruction = props => {
	const propertiesGenerator = () => {
		return props.params.map(prm => {
			return <div className='Property'>
				<p>{prm}</p>
			</div>
		})
	}

	return (
		<div className='Instruction'>
			<div className='InstructionTitle'>
				{props.inst}
			</div>
			<div className='Properties'>
				{propertiesGenerator()}
			</div>
		</div>
	)
}

export default Instruction