const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(`${MONGO_URI}`, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
});
