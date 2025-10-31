const { Router } = require("express");
const db = require("../db/queries");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
	res.render("form", { title: "New Message" });
});

messageRouter.post("/", async (req, res) => {
	const messageText = req.body.messageText;
	const messageUsername = req.body.name;
	const messageDate = new Date().toUTCString();
	const newMessage = { messageText, messageUsername, messageDate };

	try {
		await db.postNewMessage(newMessage);
		res.redirect("/");
	} catch (error) {
		console.log("Error", error);
		res.render("error", { error: error });
	}
});

module.exports = messageRouter;
