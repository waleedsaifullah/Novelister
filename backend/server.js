const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const colors = require('colors')

const PORT = process.env.PORT || 5000

const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/novels', require('./routes/novelRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))