const express = require("express");
const { getPrivateData } = require("../controller/private");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/").get(protect, getPrivateData);

module.exports = router;