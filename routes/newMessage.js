const { Router } = require("express");
const { messages } = require("../data/messages.js");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
	res.render("form", { title: "New Message" });
});

messageRouter.post("/", (req, res) => {
	const messageText = req.body.messageText;
	const messageUser = req.body.name;

	messages.push({
		text: messageText,
		user: messageUser,
		added: new Date().toUTCString(),
	});

	res.redirect("/");
});

module.exports = messageRouter;
