const express = require('express');
const { createOption, addVote, deleteOption } = require('../controllers/optionController');
const router = express.Router();

router.post('/:id/options/create', createOption);
router.post('/:id/add_vote', addVote);
router.delete('/:id/delete', deleteOption);

module.exports = router;
