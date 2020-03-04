const express = require('express');
const { getTransactions, addTransaction, deleteTransactions } = require('../controllers/transactions');

const router = express.Router();

router.route('/').get(getTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransactions);

module.exports = router;
