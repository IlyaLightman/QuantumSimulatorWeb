const { Router } = require('express')
const config = require('config')
const QSQuery = require('../models/QSQuery')
const fetch = require('node-fetch')

const router = Router()

const QS_URI = config.get('QUANTUM_SIMULATOR_API_URI')

router.post('/calculate',
	async (req, res) => {
		try {
			const qsbody = {
				qubits: req.body.qubits,
				repeats: req.body.repeats,
				instructions: req.body.instructions
			}

			const qs_response =
				await fetch(`${QS_URI}/quantumsimulator`, { method: 'POST', body: qsbody })

			res.status(201).json({ response: qs_response })
		} catch (err) {
			res.status(500)
		}
	})