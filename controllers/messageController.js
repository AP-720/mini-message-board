const { getMessageById } = require("../data/messages.js");

async function getMessageDetails(req, res) {
	const messageId = req.params.id;

	const message = await getMessageById(messageId);

	if (!message) {
		res.status(404).send("Message not found");
		return;
	}

	res.render("details", { title: "Message Details", message: message });
}

module.exports = getMessageDetails;
