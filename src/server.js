const express = require('express');
const mongoose = require('mongoose');
const requestTypesRouter = require('./routes/requestTypes.js');

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/support-api';
mongoose.connect(mongoUri).then(() => console.log('MongoDB connected'));

app.use('/api/request-types', requestTypesRouter);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
