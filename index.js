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

// ✅ Health check (sirf API ke liye)
app.get("/health", (req, res) => {
  res.send("BFHL API is running ✅");
});

// ✅ Serve frontend build (React app)
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/dist", "index.html"));
});

// ✅ Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
