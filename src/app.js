const express = require('express')
const bodyParser = require('body-parser')
const pool = require('./db')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT || 4000

// -----Middlewares Init-----
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// -----Route Handlers-----
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM Users')
    res.status(200).json(allUsers.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
})

app.post('/user', async (req, res) => {
  try {
    const { first_name, last_name, email, profile_image } = req.body
    const newUser = await pool.query(
      'INSERT INTO Users (first_name, last_name, email, profile_image) VALUES ($1, $2, $3, $4) RETURNING *;',
      [first_name, last_name, email, profile_image],
    )
    res.status(200).json(newUser.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
})

// -----Server Handlers-----
app.listen(port, () => {
  console.log(`Express server is ready at http://localhost:${port}`)
})
