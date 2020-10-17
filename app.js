const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.json({ extended: true }))

if (process.env.NODE_ENV === 'production') {

}

const PORT = config.get('PORT');

async function start() {
	try {
		await mongoose.connect(config.get('MONGO_URI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})

		http.createServer(app).listen(PORT, () => {
			console.log('[HTTP] App has been started on port 80')
		})

		// https server
	} catch (err) {
		console.log('Server error', err.message)
		process.exit(1)
	}
}

start()
	.then(() => console.log('Success'))