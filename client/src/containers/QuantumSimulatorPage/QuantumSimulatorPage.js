import React, { useState } from 'react'
import './QuantumSimulatorPage.scss'

import InstructionButton from '../../components/InstructionButton/InstructionButton';

const QuantumSimulatorPage = () => {
	const [state, setState] = useState({
		qubits: 1, repeats: 1000, instructions: []
	})

	return (
		<div className='QuantumSimulatorPage'>
			<div className='LeftContainer'>
				<InstructionButton
					instruction = 'SET'
					parameters = 'Q R'
					color = '#AC5967'
				/>
				<InstructionButton
					instruction = 'IFM'
					parameters = 'Q R'
					color = '#486BA0'
				/>
				<InstructionButton
					instruction = 'CNOT'
					parameters = 'Q Q'
					color = '#C66868'
				/>
				<InstructionButton
					instruction = 'H GATE'
					parameters = 'Q'
					color = '#A458B7'
				/>
				<InstructionButton
					instruction = 'X GATE'
					parameters = 'Q'
					color = '#3F9B53'
				/>
				<InstructionButton
					instruction = 'Y GATE'
					parameters = 'Q'
					color = '#C2AD3C'
				/>
				<InstructionButton
					instruction = 'Z GATE'
					parameters = 'Q'
					color = '#619BD1'
				/>
				<div className='LeftContainerUnder' />
			</div>


		</div>
	)
}

const instructionInfo = {
	'SET': {
		color: 'red', parameters: 'Q R'
	}
}

export default QuantumSimulatorPage