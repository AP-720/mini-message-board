const { Router } = require("express");
const { messages } = require("../data/messages.js");
const getMessageDetails = require("../controllers/messageController.js");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.get("/message/:id", getMessageDetails);

module.exports = indexRouter;
