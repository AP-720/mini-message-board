const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date().toUTCString(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date().toUTCString(),
	},
];

async function getMessageById(messageId) {
	// Check if the ID is a valid index.
	if (messageId >= 0 && messageId < messages.length) {
		return messages[messageId];
	}

	return undefined;
}

module.exports = { messages, getMessageById };
