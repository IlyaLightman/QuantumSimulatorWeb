import React, { useState } from 'react';
import './Instruction.scss'

const Instruction = props => {
	const parameterUp = (parameter) => {
		const isResult = parameter === 'Zero' || parameter === 'One'
		if (isResult) {
			return parameter === 'Zero' ? 'One' : 'Zero'
		}

		const q = Number(parameter.substr(1, parameter.length - 1))
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
						key={`key${prmIndex}`}
			>
				<p>{prm}</p>
			</div>
		})
	}

	return (
		<div className='Instruction' style={
			props.params.length === 1 ? {
				width: '180px'
			} : {}
		}>
			<div className='InstructionTitle' style={{
				color: colors[props.inst]
			}}>
				{props.inst}
			</div>
			<div className='Properties'>
				{propertiesGenerator()}
			</div>
		</div>
	)
}

const colors = {
	'SET': '#AC5967',
	'IFM': '#486BA0',
	'CNOT': '#C66868',
	'H': '#A458B7',
	'X': '#3F9B53',
	'Y': '#CA9D00',
	'Z': '#619BD1',
}

export default Instruction