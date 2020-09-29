const express = require("express");
const router = express.Router();

// @troute  Get api/post
// @desc    Test route
// @access  public
router.get("/", (req, res) => {
  res.send("post routes");
});

module.exports = router;
