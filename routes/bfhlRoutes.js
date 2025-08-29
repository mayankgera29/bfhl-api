const express = require("express");
const { processData } = require("../controllers/bfhlController");

const router = express.Router();

router.post("/", processData);

module.exports = router;
