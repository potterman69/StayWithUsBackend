const mongoose = require("mongoose");

const PropertySchema = mongoose.Schema(
	{
		name: String,
		description: String,
		address: String,
		images: [String],
		area: Number,
		bedroom: Number,
		kitchen: Number,
		bathroom: Number,
		rent: Number,
		carParking: { type: Boolean, default: false },
		meals: { type: Boolean, default: false },
		breakfastCost: { type: Number, default: 0 },
		lunchCost: { type: Number, default: 0 },
		dinnerCost: { type: Number, default: 0 },
		rating: { type: mongoose.Schema.Types.Mixed, default: [] },
		seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Property", PropertySchema);