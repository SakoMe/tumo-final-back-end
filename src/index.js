require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('./db/mongoConnect');

const destinationRoutes = require('./routes/destinationRoutes');

const app = express();
// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//routes
app.use('/api/destinations', destinationRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
