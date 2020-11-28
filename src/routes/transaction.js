const express = require('express')
const {
  getAllTransactions,
  getUserTransactions,
  addTransaction,
} = require('../controllers/transaction')
const router = express.Router()

router.get('/transactions', getAllTransactions)
router.get('/user-transactions/:userId', getUserTransactions)
router.post('/transaction', addTransaction)

module.exports = router
