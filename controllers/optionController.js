const Option = require('../models/Option');
const Question = require('../models/Question');

exports.createOption = async (req, res) => {
  try {
    const { text } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    const newOption = new Option({ text, question: question._id });
    await newOption.save();

    question.options.push(newOption._id);
    await question.save();

    res.status(201).json(newOption);
  } catch (error) {
    console.error('Error creating option:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.addVote = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    if (!option) return res.status(404).json({ message: 'Option not found' });

    option.votes += 1;
    await option.save();

    res.json(option);
  } catch (error) {
    console.error('Error adding vote:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteOption = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    if (!option) return res.status(404).json({ message: 'Option not found' });

    await option.remove();
    res.json({ message: 'Option deleted' });
  } catch (error) {
    console.error('Error deleting option:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
