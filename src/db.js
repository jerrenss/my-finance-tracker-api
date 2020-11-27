const { Client } = require('pg')
const dotenv = require('dotenv')
dotenv.config()

const pool = new Client({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  database: process.env.POSTGRESQL_DATABASE,
})

pool.connect((err) => {
  if (!err) {
    console.log('PostgreSQL database is connected!')
  } else {
    console.log('PostgreSQL database failed to connect!')
  }
})

module.exports = pool
