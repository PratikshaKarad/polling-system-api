const express = require('express');
const { createQuestion, getQuestion, deleteQuestion } = require('../controllers/questionController');
const router = express.Router();

router.post('/create', createQuestion);
router.get('/:id', getQuestion);
router.delete('/:id/delete', deleteQuestion);

module.exports = router;
