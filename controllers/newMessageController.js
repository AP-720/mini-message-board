const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const messageErr = "Message must be less than 255 character.";
const nameErr = "Username must be between 1 and 20 characters.";

const validateMessage = [
	body("messageText")
		.trim()
		.isLength({ max: 255 })
		.withMessage(`${messageErr}`),
	body("username")
		.trim()
		.isLength({ min: 1, max: 20 })
		.withMessage(`${nameErr}`),
];

function newMessageForm(req, res) {
	res.render("form", { title: "New Message" });
}

// Created as an array so can pass just one things to the route. Which makes it tidier, but less modular. If need to reuse the validation some where else would be better to pass two middleware to the route. The order in which they are passed is important, runs from first to last. So would need to pass the validation first if it was used by other middleware after.
const newMessagePost = [
	validateMessage,
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("form", {
				title: "New Message",
				errors: errors.array(),
			});
		}

		const { messageText, messageUsername } = matchedData(req);
		const messageDate = new Date().toUTCString();
		const newMessage = { messageText, messageUsername, messageDate };

		try {
			await db.postNewMessage(newMessage);
			res.redirect("/");
		} catch (error) {
			console.log("Error", error);
			res.render("error", { error: error });
		}
	},
];

module.exports = {
	newMessageForm,
	newMessagePost,
};
