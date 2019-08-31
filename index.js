const express = require('express')
const app = express()
const mongoose = require('./config/database')
const cors = require('cors')
const router = require('./config/routes')

const port = process.env.PORT || 3005

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})
