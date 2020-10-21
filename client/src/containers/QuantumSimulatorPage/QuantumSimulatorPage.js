import React, { useState } from 'react'
import './QuantumSimulatorPage.scss'

import InstructionButton from '../../components/InstructionButton/InstructionButton';
import SimpleButton from '../../components/UI/SimpleButton/SimpleButton';
import Instruction from '../../components/Instruction/Instruction';

const QuantumSimulatorPage = () => {
	const [state, setState] = useState({
		qubits: 3, repeats: 1000
	})
	const [instructions, setInstructions] =
		useState([{ inst: 'SET', params: ['Q1', 'One'] }/*, { inst: 'H', params: ['Q2']}*/])

	const addInstruction = (instruction, prms) => {
		setInstructions([...instructions, ({
			inst: instruction, params: prms
		})])
	}

	const instructionsGenerator = () => {
		const lines = [[]]
		let line = 0; let elements = 0
		instructions.forEach((instruction, index) => {
			if (elements >= 19) {
				elements = 0
				lines.push([])
				line += 1
			}
			lines[line].push(<Instruction
				inst={instruction.inst}
				params={(instruction).params}
				parametersEditor={parametersEditor}
				index={index}
				qubits={state.qubits}
				key={`key_${index}`}
			/>)
			elements += instruction.params.length === 2 ? 8 : 5
		})
		return lines.map((line) => (
			<div className='InstructionsLine'>
				{line.map((inst) => inst)}
			</div>
		))
	}

	const parametersEditor = (instructionIndex, parameterIndex, newParameter) => {
		const insts = instructions
		insts[instructionIndex].params[parameterIndex] = newParameter

		setInstructions(insts)

		reload()
	}

	const reload = () => {
		setState({ ...state })
	}

	return (
		<div className = 'QuantumSimulatorPage'>
			<div className = 'LeftContainer'>
				<InstructionButton
					instruction='SET'
					parameters='Q R'
					color='#AC5967'
					onClick={() => {
						addInstruction('SET', ['Q1', 'Zero'])
					}}
				/>
				<InstructionButton
					instruction='IFM'
					parameters='Q R'
					color='#486BA0'
					onClick={() => {
						addInstruction('IFM', ['Q1', 'Zero'])
					}}
				/>
				<InstructionButton
					instruction='CNOT'
					parameters='Q Q'
					color='#C66868'
					onClick={() => {
						addInstruction('CNOT', ['Q1', 'Q2'])
					}}
				/>
				<InstructionButton
					instruction='H GATE'
					parameters='Q'
					color='#A458B7'
					onClick={() => {
						addInstruction('H', ['Q1'])
					}}
				/>
				<InstructionButton
					instruction='X GATE'
					parameters='Q'
					color='#3F9B53'
					onClick={() => {
						addInstruction('X', ['Q1'])
					}}
				/>
				<InstructionButton
					instruction='Y GATE'
					parameters='Q'
					color='#CA9D00'
					onClick={() => {
						addInstruction('Y', ['Q1'])
					}}
				/>
				<InstructionButton
					instruction='Z GATE'
					parameters='Q'
					color='#619BD1'
					onClick={() => {
						addInstruction('Z', ['Q1'])
					}}
				/>
				<div className='LeftContainerUnder'/>
			</div>
			<div className = 'ConstructorContainer'>
				<div className = 'ControlPanel'>
					<div className = 'Information'>
						<p>Qubits: {state.qubits}</p>
						<p>Repeats: {state.repeats}</p>
					</div>

					<div className = 'Buttons'>
						<SimpleButton title='Edit'/>
						<SimpleButton title='Clear'/>
						<SimpleButton title='Play'/>
					</div>

				</div>
				<div className = 'Constructor'>
					{instructionsGenerator()}
				</div>
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