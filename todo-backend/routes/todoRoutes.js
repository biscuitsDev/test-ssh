const express = require('express');
const {newTodo, allTodo}  = require('../controllers/todoController');

const router = express.Router();

router.route('/todo/create').post(newTodo)
router.route('/todos').get(allTodo)

module.exports = router;