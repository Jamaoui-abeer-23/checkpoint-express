const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/page");
var workingHoursMiddleware = require("./middleware/workingHourseMiddleware");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Apply middleware to all routes
app.use(workingHoursMiddleware);

// Use routes
app.use("/", pagesRoutes);

app.listen(PORT, () =>
	console.log(`Server is running on http://localhost:${PORT}`)
);