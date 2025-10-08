const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
	res.render("form", { title: "New Message" });
});

module.exports = messageRouter;
