import React from 'react';
import './Instruction.scss'

const Instruction = props => {
	const parameterUp = (parameter) => {
		const isResult = parameter === 'Zero' || parameter === 'One'
		if (isResult) {
			return parameter === 'Zero' ? 'One' : 'Zero'
		}

		const q = Number(parameter.substr(1, parameter.length - 1))
		console.log(props.qubits, q + 1)
		if (1 + q > props.qubits) {
			return 'Q1'
		} else {
			return `Q${q + 1}`
		}
	}

	const propertiesGenerator = () => {
		return props.params.map((prm, prmIndex) => {
			return <div className='Property'
				onClick={() => props.parametersEditor(props.index, prmIndex, parameterUp(prm))}
				key = {`key_${prmIndex}`}
			>
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