const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')

const app = express()

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
app.use(express.json({ extended: true }))

app.use('/api/qs', require('./routes/qs.routes'))

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const HTTP_PORT = config.get('HTTP_PORT');
const HTTPS_PORT = config.get('HTTPS_PORT');

async function start() {
	try {
		await mongoose.connect(config.get('MONGO_URI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})

		http.createServer(app).listen(HTTP_PORT, () => {
			console.log(`[HTTP] App has been started on port ${HTTP_PORT}`)
		})

		// https server
	} catch (err) {
		console.log('Server error', err.message)
		process.exit(1)
	}
}

start()
	.then(() => console.log('Success'))