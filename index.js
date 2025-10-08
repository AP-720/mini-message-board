const { Router } = require("express");
const messages = require("./data/messages.js");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = indexRouter;
