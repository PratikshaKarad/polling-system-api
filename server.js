const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

app.use('/api/questions', questionRoutes);
app.use('/api/options', optionRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
