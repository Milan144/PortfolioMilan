const express = require("express");
const router = express.Router();
const work = require("../services/work");

// Get animaux

router.get("/", async function (req, res, next) {
  try {
    res.json(await work.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error  `, err.message);
    next(err);
  }
});


module.exports = router;
