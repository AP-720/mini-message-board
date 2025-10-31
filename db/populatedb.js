require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR(255),
username VARCHAR(20),
added TIMESTAMP
);

INSERT INTO messages(text, username, added)
VALUES
('Hi there!','Amando', NOW()),
('Hello World','Charles', NOW());
`;

let dbUrl =
	process.env.NODE_ENV === "production"
		? process.env.PROD_DB_URL
		: process.env.LOCAL_DB_URL;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: dbUrl,
		// If dbUrl is a local, non-SSL connection, set ssl to false
		ssl:
			process.env.NODE_ENV === "production"
				? { rejectUnauthorized: false }
				: false,
	});
	try {
		await client.connect();
		await client.query(SQL);
	} catch (error) {
		console.log("Error:", error);
	} finally {
		await client.end();
		console.log("done");
	}
}

main();
