const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const bfhlRoutes = require("./routes/bfhlRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ✅ API Routes
app.use("/bfhl", bfhlRoutes);

// ✅ Health check
app.get("/health", (req, res) => {
  res.send("BFHL API is running ✅");
});

// ✅ Serve React frontend build (works fine in Express v4)
const frontendPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

// ✅ Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

