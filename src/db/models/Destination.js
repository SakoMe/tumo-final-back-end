const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
	{
		city: {
			type: String,
			required: true,
			trim: true,
		},
		country: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		continent: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
