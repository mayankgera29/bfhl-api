const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bfhlRoutes = require("./routes/bfhlRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(bodyParser.json());

// ✅ allow all origins
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Routes
app.use("/bfhl", bfhlRoutes);

// Health check
app.get("/", (req, res) => res.send("BFHL API running ✅"));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
