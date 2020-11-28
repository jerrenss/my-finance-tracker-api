const pool = require('../db')

exports.getAllTransactions = async (req, res) => {
  try {
    const allTransactions = await pool.query('SELECT * FROM Transactions')
    res.status(200).json(allTransactions.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
}

exports.getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params
    const allTransactions = await pool.query(
      'SELECT * FROM Transactions WHERE user_id = $1',
      [userId],
    )
    res.status(200).json(allTransactions.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
}

exports.addTransaction = async (req, res) => {
  try {
    const { user_id, purpose, category, amount_spent, receipt_image } = req.body
    const newTransaction = await pool.query(
      'INSERT INTO Transactions (user_id, purpose, category, amount_spent, receipt_image) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
      [user_id, purpose, category, amount_spent, receipt_image],
    )
    res.status(200).json(newTransaction.rows)
  } catch (err) {
    res.status(400).json({ errMsg: err })
  }
}
