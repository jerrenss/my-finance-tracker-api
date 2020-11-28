const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const userRoutes = require('./routes/user')
const transactionRoutes = require('./routes/transaction')

const app = express()
const port = process.env.PORT || 4000

// -----Middlewares Init-----
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// -----Route Handlers-----
app.get('/', (req, res) => {
  res.send('Welcome to My Finance Tracker!')
})

app.use('/api', userRoutes)
app.use('/api', transactionRoutes)

// -----Server Handlers-----
app.listen(port, () => {
  console.log(`Express server is ready at http://localhost:${port}`)
})
