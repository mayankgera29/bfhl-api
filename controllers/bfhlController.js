const { processInput } = require("../services/bfhlService");

exports.processData = (req, res, next) => {
  try {
    const response = processInput(req.body.data || []);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
