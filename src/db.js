const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  database: process.env.POSTGRESQL_DATABASE,
})

module.exports = pool
