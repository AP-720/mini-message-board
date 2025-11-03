const { Router } = require("express");
const messageController = require("../controllers/messageController");
const indexRouter = Router();

indexRouter.get("/", messageController.getAllMessages);
indexRouter.get("/message/:id", messageController.getMessageDetails);

module.exports = indexRouter;
