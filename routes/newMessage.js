const { Router } = require("express");
const newMessage = require("../controllers/newMessageController");

const messageRouter = Router();

messageRouter.get("/", newMessage.newMessageForm);
messageRouter.post("/", newMessage.newMessagePost);

module.exports = messageRouter;
