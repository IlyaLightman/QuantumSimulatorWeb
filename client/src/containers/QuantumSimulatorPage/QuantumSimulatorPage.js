import React, { useState } from 'react'
import './QuantumSimulatorPage.scss'

import InstructionButton from '../../components/InstructionButton/InstructionButton';

const QuantumSimulatorPage = () => {
	const [state, setState] = useState({
		qubits: 1, repeats: 1000, instructions: []
	})

	return (
		<div>
			<InstructionButton />
			<InstructionButton />
			<InstructionButton />
		</div>
	)
}

export default QuantumSimulatorPage