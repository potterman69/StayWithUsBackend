module.exports = (app) => {
	const user = require("../controllers/user.controller.js");
	const auth = require("../controllers/auth.controller.js");
	const JWT = require("../helper/jsonwebtoken");

	// Create a new user
	app.post("/users", user.create);

	// Login a user
	app.post("/login", auth.login);

	// Retrieve all users
	app.get("/users", user.findAll);

	// Retrieve a single user with userId
	app.get("/users/:userId", user.findOne);

	// Update a user with userId
	app.put("/users/:userId", JWT.checkToken, user.update);

	// Delete a user with userId
	app.delete("/users/:userId", JWT.checkToken, user.delete);
};
