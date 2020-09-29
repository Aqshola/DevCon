const express = require("express");
const router = express.Router();

// @troute  Get api/users
// @desc    Test route
// @access  public
router.get("/", (req, res) => {
  res.send("user routes");
});

module.exports = router;
