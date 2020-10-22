const { Router } = require('express')
const config = require('config')
const QSQuery = require('../models/QSQuery')
const fetch = require('node-fetch')

const router = Router()

const QS_URI = config.get('QUANTUM_SIMULATOR_API_URI')

router.post('/calc',
	async (req, res) => {
		try {
			// instructions: [{ inst: 'SET', params: ['Q1', 'One'] }/*, { inst: 'H', params: ['Q2']}*/]
			const insts = req.body.instructions

			const instructions = []
			insts.forEach(instruction => {
				instruction.params.forEach((inst, index) => {
					if (inst[0] === 'Q') instruction.params[index] =
						`q${inst.substr(1, inst.length - 1)}`
				})
				instructions.push(`${instruction.inst}(${instruction.params.toString()})`)
			})

			console.log(instructions)

			const qsbody = {
				qubits: req.body.qubits,
				repeats: req.body.repeats,
				instructions
			}

			const qs_response =
				await fetch(`${QS_URI}/quantumsimulator`, { method: 'POST', body: qsbody })

			res.status(201).json({ response: qs_response })
		} catch (err) {
			res.status(500).json({ err })
		}
	})

module.exports = router