const db = require("../db/queries");

async function getAllMessages(req, res) {
	const messages = await db.getAllMessages();

	res.render("index", {
		title: "Mini Message Board",
		messages: formatMessageDate(messages),
	});
}

async function getMessageDetails(req, res) {
	// req.params returns a string so in this case I needed an integer.
	const messageId = Number(req.params.id);
	const message = await db.getMessageDetails(messageId);

	if (!message) {
		res.status(404).send("Message not found");
		return;
	}

	res.render("details", {
		title: "Message Details",
		message: formatMessageDate(message),
	});
}

// Helper function to format the date string to something more user friendly
function formatMessageDate(data) {
	if (Array.isArray(data)) {
		return data.map((message) => ({
			...message,
			added: message.added.toLocaleString("en-GB", { timeZone: "UTC" }),
		}));
	} else {
		return {
			...data,
			added: data.added.toLocaleString("en-GB", { timeZone: "UTC" }),
		};
	}
}

module.exports = {
	getAllMessages,
	getMessageDetails,
};
