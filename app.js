const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 3000;

// Routers
const indexRouter = require("./index");
// Static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Listening on port:${PORT}`);
});
