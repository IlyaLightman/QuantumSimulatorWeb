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

			const qsbody = JSON.stringify({
				qubits: req.body.qubits,
				repeats: req.body.repeats,
				instructions
			})

			console.log(qsbody)

			// https://localhost:5001/quantumsimulator
			// const qs_response =
			// 	// await fetch(`${QS_URI}/quantumsimulator`, { method: 'POST', body: qsbody,
			// 	// 	headers: {['Content-Type']: 'application/json'} })
			//
			// 	await fetch(`https://localhost:5001/quantumsimulator`, { method: 'POST', body: qsbody,
			// 		headers: {['Content-Type']: 'application/json'} })

			await fetch('https://localhost:5001/quantumsimulator', {
				method: 'post',
				body:    qsbody,
				headers: { 'Content-Type': 'application/json' },
			})
				.catch(err => res.status(500).json({ err }))
				.then(res => res.json())
				.then(j => res.status(201).json({ response: j }));

			res.status(201).json({ response: {} })
		} catch (err) {
			res.status(500).json({ err })
		}
	})

module.exports = router