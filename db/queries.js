const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function getMessageDetails(id) {
	const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
	return rows[0];
}

async function postNewMessage({ messageText, messageUsername, messageDate }) {
	const sql =
		"INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)";

	await pool.query(sql, [messageText, messageUsername, messageDate]);
}

module.exports = {
	getAllMessages,
	getMessageDetails,
	postNewMessage,
};
