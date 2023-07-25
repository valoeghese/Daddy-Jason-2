import express from "express"
import path from "path";

const app = express();

// Parse JSON
app.use(express.json());

// Routes
/*app.get("/api/error", (req, res) => {
	throw new Error("Intentional Error.");
});*/

// Static File Serving
const publicDir = path.join(path.resolve(), "public");
app.use(express.static(publicDir));

// Error Handler
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(`<!DOCTYPE html>
	<html>
		<head><title>Error 500</title></head>
		<body>Something went wrong :(</body>
	</html>`);
});

  
export default app;