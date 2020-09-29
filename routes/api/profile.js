const express = require("express");
const router = express.Router();

// @troute  Get api/profile
// @desc    Test route
// @access  public
router.get("/", (req, res) => {
  res.send("profile routes");
});

module.exports = router;
