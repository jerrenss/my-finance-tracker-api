const pool = require('../db')

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM Users')
    res.status(200).json(allUsers.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
}

exports.addUser = async (req, res) => {
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
}
